import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/IvanildoBorges.png" />
                    <div className={styles.authorInfo}>
                        <strong>Ivanildo Borges</strong>
                        <span>Dev & Designer</span>
                    </div>
                </div>

                <time title="28 de Setembro às 16:30h" dateTime="2023-09-28">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Olá pessoas 😁</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um pequeno projeto de um banco em typescript para compreensão dos princípios da Programação Orientada a Objetos. Confiram no link abaixo:</p>
                <p>👉🏼 <a href="https://github.com/IvanildoBorges/construindo-uma-aplicacao-de-banco-com-typescript">Projeto: Liso Banking</a></p>
                <p>
                    <a href="">#typescript</a>{' '} {/* {''} serve para dar um espaço após o link */}
                    <a href="">#project</a>{' '}
                    <a href="">#banco</a>{' '}
                </p>
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