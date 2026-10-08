import {use} from 'react';
import {PostsSearch} from '@/features/posts-search';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';
import {Post} from "@/shared/lib";

type DeferredComparisonProps = {
    postsPromise: Promise<Post[]>;
};

export const DeferredComparison = ({postsPromise}: DeferredComparisonProps) => {
    const posts = use(postsPromise);

    return (
        <div className={styles.columns}>
            <Panel>
                <PostsSearch posts={posts} title="Без useDeferredValue"/>
            </Panel>
            <Panel>
                <PostsSearch posts={posts} title="С useDeferredValue" deferred/>
            </Panel>
        </div>
    );
};
