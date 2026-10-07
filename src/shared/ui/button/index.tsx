import type {ReactNode} from 'react';
import styles from './styles.module.css';

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
};

export const Button = ({children, onClick, disabled}: ButtonProps) => (
    <button className={styles.button} type="button" onClick={onClick} disabled={disabled}>
        {children}
    </button>
);
