import {Suspense, useState} from 'react';
import {DeferredComparison} from '@/widgets/deferred-comparison';
import {fetchPosts} from '@/shared/api';
import {ErrorBoundary} from 'react-error-boundary';
import styles from './styles.module.css';

export const DeferredDemoPage = () => {
    const [postsPromise] = useState(fetchPosts);

    return (
        <div className={styles.page}>
            <h1>useDeferredValue</h1>
            <ErrorBoundary fallback={<p>Не удалось загрузить посты</p>}>
                <Suspense fallback={<p>Загрузка...</p>}>
                    <DeferredComparison postsPromise={postsPromise}/>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};
