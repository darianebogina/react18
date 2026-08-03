import {useState} from 'react';
import {PostCard} from '@/entities/post';
import {Input} from '@/shared/ui';
import styles from './styles.module.css';
import {filterPosts, Post} from "@/shared/lib";

type SyncSearchProps = {
    posts: Post[];
};

export const SyncSearch = ({posts}: SyncSearchProps) => {
    const [query, setQuery] = useState('');

    const filtered = filterPosts(posts, query);

    return (
        <div className={styles.syncSearch}>
            <div className={styles.header}>
                <h2>Синхронный</h2>
                <span className={styles.count}>{filtered.length}</span>
            </div>
            <div className={styles.inputWrap}>
                <Input value={query} onChange={setQuery} placeholder="Поиск по постам..."/>
            </div>
            <div className={styles.list}>
                {filtered.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};
