import { Post } from "./components/Post"
import { Header } from "./components/Header"
import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"
import { PostProps } from "./models/PostProps"

function App() {

  const posts: PostProps[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/ivanildoborges.png",
        name: "Ivanildo Borges",
        role: "Front-end Developer",
      },
      content: [
          {
            type: "paragraph", 
            content: {
              paragraph: "Olá pessoas 😁",
            },
          },
          {
            type: "paragraph", 
            content: {paragraph: "Acabei de subir mais um projeto no meu portfólio. É um pequeno projeto de um banco em typescript para compreensão dos princípios da Programação Orientada a Objetos. Confiram no link abaixo:"}
          },
          {
            type: "link", 
            content: {
              title: "Liso Banking", 
              url: "https://github.com/IvanildoBorges/construindo-uma-aplicacao-de-banco-com-typescript"
            },
          },
          {
            type: "hashtag",
            content: {
              tags: ["#typescript", "#project", "#banco"],
            }
          },
      ],
      publishedAt: new Date("2023-09-30T12:00:00.000Z"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://media.licdn.com/dms/image/D4D35AQFU2zcbow1pZw/profile-framedphoto-shrink_400_400/0/1688985365301?e=1696694400&v=beta&t=SWctHrdktHlYbCAMCyjT-pSBKjZx_R_qrO36Vi9VWDI",
        name: "Ivanildo Borges",
        role: "Designer",
      },
      content: [
          {
            type: "paragraph", 
            content: {
              paragraph: "Olá rede 😁"
            },
          },
          {
            type: "paragraph", 
            content: {
              paragraph: "Acabei de subir mais um projeto no meu portfólio. É um pequeno projeto de um banco em typescript para compreensão dos princípios da Programação Orientada a Objetos. Confiram no link abaixo:"
            },
          },
          {
            type: "link", 
            content: {
              title: "Liso Banking", 
              url: "https://github.com/IvanildoBorges/construindo-uma-aplicacao-de-banco-com-typescript"
            },
          },
          {
            type: "hashtag",
            content: {
              tags: ["#typescript", "#project", "#banco"],
            }
          },
      ],
      publishedAt: new Date("2023-09-29T20:00:00.000Z"),
    },
  ]
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
