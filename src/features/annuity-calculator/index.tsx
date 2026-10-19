import {useReducer} from 'react';
import {Button, Input} from '@/shared/ui';
import {calculateAnnuity, FIELDS, initialState, loanReducer, money, SUMMARY} from './lib';
import styles from './styles.module.css';

export const AnnuityCalculator = () => {
    const [state, dispatch] = useReducer(loanReducer, initialState);
    const result = calculateAnnuity(state);

    return (
        <div className={styles.calculator}>
            <div className={styles.form}>
                {FIELDS.map(({field, label, placeholder}) => (
                    <label key={field} className={styles.field}>
                        {label}
                        <Input
                            value={state[field]}
                            placeholder={placeholder}
                            onChange={(value) => dispatch({type: 'change', field, value})}
                        />
                    </label>
                ))}
            </div>

            {result ? (
                <div className={styles.summary}>
                    {SUMMARY.map(({key, label}) => (
                        <div key={key}>
                            <div className={styles.label}>{label}</div>
                            <div className={key === 'payment' ? `${styles.value} ${styles.payment}` : styles.value}>
                                {money.format(result[key])}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className={styles.hint}>
                    Укажите сумму, ставку до 100% и срок до 50 лет (600 месяцев)
                </p>
            )}

            <div className={styles.actions}>
                <Button onClick={() => dispatch({type: 'reset'})}>Сбросить</Button>
            </div>
        </div>
    );
};
