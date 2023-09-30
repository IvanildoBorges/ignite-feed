import ptBR from "date-fns/locale/pt-BR"
import { format, formatDistanceToNow } from "date-fns"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(["Muito bom Ivan, parabéns!!! 👏🏼👏🏼"])
    const [newCommentText, setNewCommentText] = useState("")

    // const publishedDateFormatted = new Intl.DateTimeFormat("pt-br", {
    //     day: "2-digit",
    //     month: "long",
    //     hour: "2-digit",
    //     minute: "2-digit",
    // }).format(publishedAt)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === "paragraph") {
                        return <p key={index}>{line.content}</p>
                    } else if (line.type === "link") {
                        return <a key={index} href={line.content.url}>{line.content.title}</a>
                    } else if (line.type === "hashtag") {
                        return (
                            <p key={index}>
                                {line.content.tags.map((tag, i) => {
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
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return <Comment key={index} content={comment} />
                })}
            </div>
        </article>
    )
}