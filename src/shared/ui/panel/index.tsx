import type {ReactNode} from 'react';
import styles from './styles.module.css';

type PanelProps = {
    children: ReactNode;
};

export const Panel = ({children}: PanelProps) => (
    <div className={styles.panel}>{children}</div>
);
