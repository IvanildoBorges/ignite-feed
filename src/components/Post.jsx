import ptBR from "date-fns/locale/pt-BR"
import { format, formatDistanceToNow } from "date-fns"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
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
                        return <p>
                            {line.content.tags.map((tag, i) => {
                                return (
                                    <>
                                        <a key={i} href="">{tag}</a>{' '}
                                    </>
                                )
                            })}
                        </p>
                    }
                })}
            </div>
            <form className={styles.commentForm}>
                <strong>Comentários:</strong>
                <textarea 
                    placeholder="Deixe seu comentário..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}