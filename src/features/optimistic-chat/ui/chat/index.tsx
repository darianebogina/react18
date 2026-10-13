import {startTransition, useOptimistic, useRef} from 'react';
import clsx from 'clsx';
import {Button, Input} from '@/shared/ui';
import {sendChatMessage} from '../../lib';
import type {ChatMessage} from '../../lib';
import styles from './styles.module.css';

type ChatProps = {
    messages: ChatMessage[];
    onSend: (message: ChatMessage) => void;
};

export const Chat = ({messages, onSend}: ChatProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic<ChatMessage[], string>(
        messages,
        (state, text) => [
            ...state,
            {id: crypto.randomUUID(), text, status: 'sending'},
        ],
    );

    const sendAction = async (formData: FormData) => {
        const text = String(formData.get('text') ?? '').trim();

        if (!text) {
            return;
        }

        formRef.current?.reset();
        addOptimisticMessage(text);

        const message = await sendChatMessage(text);
        startTransition(() => onSend(message));
    };

    return (
        <div className={styles.chat}>
            <ul className={styles.list}>
                {optimisticMessages.length === 0 && (
                    <li className={styles.empty}>Сообщений пока нет</li>
                )}
                {optimisticMessages.map((message) => (
                    <li
                        key={message.id}
                        className={clsx(styles.message, styles[message.status])}
                    >
                        {message.text}
                        {message.status === 'failed' && (
                            <small className={styles.status}>Не удалось отправить</small>
                        )}
                    </li>
                ))}
            </ul>
            <form ref={formRef} action={sendAction} className={styles.form}>
                <Input name="text" placeholder="Введите сообщение..."/>
                <Button type="submit">Отправить</Button>
            </form>
        </div>
    );
};
