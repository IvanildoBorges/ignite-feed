import { ImgHTMLAttributes } from "react"

export interface PropsAvatar extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
}