import {useState} from 'react';
import {Chat} from '@/features/optimistic-chat';
import type {ChatMessage} from '@/features/optimistic-chat';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';

export const OptimisticDemoPage = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    return (
        <div className={styles.page}>
            <h1>useOptimistic</h1>
            <p className={styles.note}>
                Сообщение появляется в списке сразу, не дожидаясь ответа сервера.
                Сервер отвечает через 1.5 секунды и в 30% случаев возвращает ошибку —
                тогда сообщение остаётся в списке с пометкой «Не удалось отправить».
            </p>
            <Panel>
                <Chat
                    messages={messages}
                    onSend={(message) => setMessages((prev) => [...prev, message])}
                />
            </Panel>
        </div>
    );
};
