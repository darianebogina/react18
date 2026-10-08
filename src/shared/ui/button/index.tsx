import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    active?: boolean;
};

export const Button = ({children, onClick, disabled, active = false}: ButtonProps) => (
    <button
        className={clsx(styles.button, active && styles.active)}
        type="button"
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);
