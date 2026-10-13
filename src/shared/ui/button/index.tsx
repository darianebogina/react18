import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    active?: boolean;
};

export const Button = ({children, onClick, type = 'button', disabled, active = false}: ButtonProps) => (
    <button
        className={clsx(styles.button, active && styles.active)}
        type={type}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);
