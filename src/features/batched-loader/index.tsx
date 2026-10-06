import {useState} from 'react';
import {fetchUser} from '@/shared/api';
import {USERS_COUNT} from '@/shared/config';
import {Button} from '@/shared/ui';
import styles from './styles.module.css';
import {User} from "@/shared/lib";

export const BatchedLoader = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [requestCount, setRequestCount] = useState(0);

    console.log('[batched] render', {user: user?.name ?? null, isLoading, requestCount});

    const handleLoad = async () => {
        setIsLoading(true);

        const nextUser = await fetchUser((requestCount % USERS_COUNT) + 1);

        setUser(nextUser);
        setIsLoading(false);
        setRequestCount((count) => count + 1);
    };

    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <h2>Автобатчинг (React 18)</h2>
            </div>
            <p className={styles.description}>
                Три <code>setState</code> после <code>await</code> → один рендер
            </p>
            <div className={styles.controls}>
                <Button onClick={handleLoad} disabled={isLoading}>Загрузить пользователя</Button>
            </div>
        </div>
    );
};
