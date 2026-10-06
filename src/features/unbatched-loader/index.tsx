import {useState} from 'react';
import {flushSync} from 'react-dom';
import {fetchUser} from '@/shared/api';
import {USERS_COUNT} from '@/shared/config';
import {Button} from '@/shared/ui';
import styles from './styles.module.css';
import {User} from "@/shared/lib";

export const UnbatchedLoader = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [requestCount, setRequestCount] = useState(0);

    console.log('[unbatched] render', {user: user?.name ?? null, isLoading, requestCount});

    const handleLoad = async () => {
        setIsLoading(true);

        const nextUser = await fetchUser((requestCount % USERS_COUNT) + 1);

        flushSync(() => setUser(nextUser));
        flushSync(() => setIsLoading(false));
        flushSync(() => setRequestCount((count) => count + 1));
    };

    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <h2>Без батчинга (как в React 17)</h2>
            </div>
            <p className={styles.description}>
                Каждый <code>setState</code> обёрнут в <code>flushSync</code> → три рендера
            </p>
            <div className={styles.controls}>
                <Button onClick={handleLoad} disabled={isLoading}>Загрузить пользователя</Button>
            </div>
        </div>
    );
};
