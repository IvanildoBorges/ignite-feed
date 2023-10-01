import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import ptBR from "date-fns/locale/pt-BR"
import { format, formatDistanceToNow } from "date-fns"
import styles from "./Post.module.css"
import {
    InvalidEvent,
    ChangeEvent,
    FormEvent, 
    useState 
} from "react"
import { PostType } from "../models/Post"

export function Post({ post }: PostType) {
    const [comments, setComments] = useState(["Muito bom Ivan, parabéns!!! 👏🏼👏🏼"])
    const [newCommentText, setNewCommentText] = useState("")
    const isNewCommentEmpty = newCommentText.length === 0

    // const publishedDateFormatted = new Intl.DateTimeFormat("pt-br", {
    //     day: "2-digit",
    //     month: "long",
    //     hour: "2-digit",
    //     minute: "2-digit",
    // }).format(post.publishedAt)

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        //imutabilidade
        const commentWithoutDeleteOne = comments.filter(comment => {
            //retorna uma lista de comentários que não forem iguais
            return comment !== commentToDelete 
        })
        setComments(commentWithoutDeleteOne)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Digite um comentário!")
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={post.publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map((line, index) => {
                    if (line.type === "paragraph") {
                        return <p key={index}>{line.content.paragraph}</p>
                    } else if (line.type === "link") {
                        return <a key={index} href={line.content.url}>{line.content.title}</a>
                    } else if (line.type === "hashtag") {
                        return (
                            <p key={index}>
                                {line.content.tags?.map((tag, i) => {
                                    return (
                                        <span key={i}>
                                            <a href="">{tag}</a>{' '}
                                        </span>
                                    )
                                })}
                            </p>
                        )
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Comentários:</strong>
                <textarea 
                    name="comment"
                    placeholder="Deixe seu comentário..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment 
                            key={index} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}