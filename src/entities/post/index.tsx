import {Post} from '@/shared/lib'
import styles from './styles.module.css'

type PostCardProps = {
    post: Post
}

export const PostCard = ({post}: PostCardProps) => (
    <div className={styles.card}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.body}>{post.body}</div>
    </div>
)
