import {ThemeShowcase} from '@/widgets/theme-showcase';
import styles from './styles.module.css';

export const ThemeDemoPage = () => (
    <div className={styles.page}>
        <h1>useSyncExternalStore</h1>
        <ThemeShowcase/>
    </div>
);
