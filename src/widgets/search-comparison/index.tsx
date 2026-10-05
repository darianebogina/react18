import {use} from 'react';
import {ConcurrentSearch} from '@/features/concurrent-search';
import {SyncSearch} from '@/features/sync-search';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';
import {Post} from "@/shared/lib";

type SearchComparisonProps = {
    postsPromise: Promise<Post[]>;
};

export const SearchComparison = ({postsPromise}: SearchComparisonProps) => {
    const posts = use(postsPromise);

    return (
        <div className={styles.searchComparison}>
            <div className={styles.columns}>
                <Panel>
                    <SyncSearch posts={posts}/>
                </Panel>
                <Panel>
                    <ConcurrentSearch posts={posts}/>
                </Panel>
            </div>
        </div>
    );
};
