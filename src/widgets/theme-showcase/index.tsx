import {ThemePreview, ThemeSwitcher} from '@/features/theme-switch';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';

export const ThemeShowcase = () => (
    <Panel>
        <div className={styles.column}>
            <ThemeSwitcher/>
            <ThemePreview/>
        </div>
    </Panel>
);
