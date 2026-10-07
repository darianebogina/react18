import {useRef, useState} from 'react';
import {fetchUser} from '@/shared/api';
import {USERS_COUNT} from '@/shared/config';
import {Button} from '@/shared/ui';
import styles from './styles.module.css';
import {User} from "@/shared/lib";

export const BatchedLoader = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [requestCount, setRequestCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current += 1;

    console.log('[batched] render', {renderCount: renderCount.current, users: users.map((user) => user.name), isLoading, requestCount});

    const handleLoad = async () => {
        setIsLoading(true);

        const nextUser = await fetchUser((requestCount % USERS_COUNT) + 1);

        setUsers((prev) => [...prev, nextUser]);
        setIsLoading(false);
        setRequestCount((count) => count + 1);
    };

    return (
        <div className={styles.column}>
            <div className={styles.header}>
                <h2>Автобатчинг (React 18)</h2>
            </div>
            <div className={styles.controls}>
                <Button onClick={handleLoad} disabled={isLoading}>Загрузить пользователя</Button>
            </div>
            <p className={styles.counter}>
                Рендеров: <strong>{renderCount.current}</strong>
            </p>
            {users.length > 0 && (
                <ul className={styles.list}>
                    {users.map((user, index) => (
                        <li key={index} className={styles.item}>
                            <span className={styles.name}>{user.name}</span>
                            <span className={styles.email}>{user.email}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
