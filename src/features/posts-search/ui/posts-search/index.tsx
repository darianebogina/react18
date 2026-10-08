import {useState} from 'react';
import {Input} from '@/shared/ui';
import {Results} from '../results';
import styles from './styles.module.css';
import {Post} from "@/shared/lib";

type PostsSearchProps = {
    posts: Post[];
    title: string;
    deferred?: boolean;
};

export const PostsSearch = ({posts, title, deferred = false}: PostsSearchProps) => {
    const [query, setQuery] = useState('');

    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.inputWrap}>
                <Input value={query} onChange={setQuery} placeholder="Поиск по постам..."/>
            </div>
            <Results posts={posts} query={query} deferred={deferred}/>
        </div>
    );
};
