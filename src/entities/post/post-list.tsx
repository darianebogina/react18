import {memo} from 'react';
import {filterPosts, Post} from '@/shared/lib';
import {PostCard} from './post-card';
import styles from './styles.module.css';

type PostListProps = {
    posts: Post[];
    query: string;
};

export const PostList = memo(({posts, query}: PostListProps) => {
    const filtered = filterPosts(posts, query);

    return (
        <>
            <div className={styles.count}>Найдено: {filtered.length}</div>
            {filtered.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </>
    );
});
