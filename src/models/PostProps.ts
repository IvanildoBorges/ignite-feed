import { Author } from "./Author";
import { Content } from "./Content";

export interface PostProps {
    id?: number
    author: Author
    content: Content[]
    publishedAt: Date
}