import type {ChangeEvent} from 'react'
import styles from './styles.module.css'

type InputProps = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export const Input = ({value, onChange, placeholder}: InputProps) => (
    <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
    />
)
