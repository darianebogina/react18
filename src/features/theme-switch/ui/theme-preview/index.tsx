import clsx from 'clsx';
import {useTheme} from '@/shared/lib';
import {THEME_LABELS} from '../../lib';
import styles from './styles.module.css';

export const ThemePreview = () => {
    const theme = useTheme();
    const isThemeDark = theme === 'dark';

    return (
        <div className={clsx(styles.card, isThemeDark && styles.dark)}>
            <strong>Карточка</strong>
            <span>Применена тема: {THEME_LABELS[theme]}</span>
        </div>
    );
};
