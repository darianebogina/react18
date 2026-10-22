import type {ChangeEvent, HTMLInputTypeAttribute, Ref} from 'react';
import styles from './styles.module.css';

type InputProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    name?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    ref?: Ref<HTMLInputElement>;
};

export const Input = ({value, defaultValue, onChange, name, type = 'text', placeholder, ref}: InputProps) => (
    <input
        ref={ref}
        className={styles.input}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange && ((event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value))}
        placeholder={placeholder}
    />
);
