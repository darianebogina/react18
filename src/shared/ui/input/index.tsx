import type {ChangeEvent, Ref} from 'react';
import styles from './styles.module.css';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    ref?: Ref<HTMLInputElement>;
};

export const Input = ({value, onChange, placeholder, ref}: InputProps) => (
    <input
        ref={ref}
        className={styles.input}
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
    />
);
