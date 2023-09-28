import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1648686291451-e38571d739de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w500&q=60" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Angela Brito</strong>
                            <time title="28 de Setembro às 16:30h" dateTime="2023-09-28">Cerca de 1h atrás</time>
                        </div>
                        <button title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Ivan, parabéns!!! 👏🏼👏🏼</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>28</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}