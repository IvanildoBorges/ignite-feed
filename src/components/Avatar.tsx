import { PropsAvatar } from "../models/PropsAvatar";
import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, ...props }: PropsAvatar) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}