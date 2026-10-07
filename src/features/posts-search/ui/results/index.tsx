import clsx from 'clsx';
import {useDeferredValue} from 'react';
import {PostList} from '@/entities/post';
import styles from './styles.module.css';
import {Post} from "@/shared/lib";

type ResultsProps = {
    posts: Post[];
    query: string;
    deferred: boolean;
};

export const Results = ({posts, query, deferred}: ResultsProps) => {
    const deferredQuery = useDeferredValue(query);
    const shownQuery = deferred ? deferredQuery : query;
    const isStale = query !== shownQuery;

    return (
        <div className={clsx(styles.list, isStale && styles.stale)}>
            <PostList posts={posts} query={shownQuery}/>
        </div>
    );
};
