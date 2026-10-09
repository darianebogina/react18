import {Button} from '@/shared/ui';
import {setTheme, useTheme} from '@/shared/lib';
import type {Theme} from '@/shared/lib';
import {THEME_LABELS} from '../../lib';
import styles from './styles.module.css';

const OPTIONS: Theme[] = ['light', 'dark'];

export const ThemeSwitcher = () => {
    const theme = useTheme();

    return (
        <div className={styles.picker}>
            {OPTIONS.map((option) => (
                <Button
                    key={option}
                    active={option === theme}
                    onClick={() => setTheme(option)}
                >
                    {THEME_LABELS[option]}
                </Button>
            ))}
        </div>
    );
};
