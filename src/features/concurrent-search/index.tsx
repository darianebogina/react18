import {useState, useTransition} from 'react';
import {PostCard} from '@/entities/post';
import {Input} from '@/shared/ui';
import styles from './styles.module.css';
import {filterPosts, Post} from "@/shared/lib";

type ConcurrentSearchProps = {
    posts: Post[];
};

export const ConcurrentSearch = ({posts}: ConcurrentSearchProps) => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (value: string) => {
        setInputValue(value);
        startTransition(() => {
            setQuery(value);
        });
    };

    const filtered = filterPosts(posts, query);

    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <h2>Конкурентный</h2>
                {isPending && <span className={styles.pendingLabel}>Обновляется…</span>}
                <span className={styles.count}>{filtered.length}</span>
            </div>
            <div className={styles.inputWrap}>
                <Input value={inputValue} onChange={handleChange} placeholder="Поиск по постам..."/>
            </div>
            <div className={styles.list}>
                {filtered.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};
