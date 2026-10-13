import type {ChangeEvent, Ref} from 'react';
import styles from './styles.module.css';

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    placeholder?: string;
    ref?: Ref<HTMLInputElement>;
};

export const Input = ({value, onChange, name, placeholder, ref}: InputProps) => (
    <input
        ref={ref}
        className={styles.input}
        type="text"
        name={name}
        value={value}
        onChange={onChange && ((event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value))}
        placeholder={placeholder}
    />
);
