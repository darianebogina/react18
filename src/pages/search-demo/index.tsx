import {Suspense, useState} from 'react';
import {
    SearchComparison,
} from '@/widgets/search-comparison';
import {fetchPosts} from '@/shared/api';
import {ErrorBoundary} from 'react-error-boundary';
import styles from './styles.module.css';

export const SearchDemoPage = () => {
    const [postsPromise] = useState(fetchPosts);

    return (
        <div className={styles.page}>
            <h1>React 18</h1>
            <ErrorBoundary fallback={<p>Не удалось загрузить посты</p>}>
                <Suspense fallback={<p>Загрузка...</p>}>
                    <SearchComparison postsPromise={postsPromise}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};
