import {useActionState} from 'react';
import {Button, Input} from '@/shared/ui';
import {FIELDS, initialState, submitContactAction} from './lib';
import styles from './styles.module.css';

export const ContactForm = () => {
    const [state, formAction] = useActionState(submitContactAction, initialState);
    const isError = state.status === 'error';
    const isSuccess = state.status === 'success';

    return (
        <form action={formAction} className={styles.form}>
            <div className={styles.fields}>
                {FIELDS.map(({field, label, placeholder, type}) => (
                    <label key={field} className={styles.field}>
                        {label}
                        <Input
                            name={field}
                            type={type}
                            defaultValue={state[field]}
                            placeholder={placeholder}
                        />
                        {isError && state.errors[field] && (
                            <p className={styles.error}>{state.errors[field][0]}</p>
                        )}
                    </label>
                ))}
            </div>

            {isSuccess && (
                <p className={styles.success}>
                    Контакт сохранён
                </p>
            )}

            <div className={styles.actions}>
                <Button type="submit">Сохранить</Button>
            </div>
        </form>
    );
};
