import clsx from 'clsx';
import styles from './styles.module.css';

type TabButtonProps = {
    title: string;
    eventKey: string;
    selected: boolean;
    onClick: () => void;
};

export const TabButton = ({ title, eventKey, selected, onClick }: TabButtonProps) => (
    <li role="presentation">
        <button
            id={`tab-${eventKey}`}
            className={clsx(styles.tabButton, selected && styles.active)}
            onClick={onClick}
            type="button"
            role="tab"
            aria-controls={`panel-${eventKey}`}
            aria-selected={selected}
        >
            {title}
        </button>
    </li>
);
