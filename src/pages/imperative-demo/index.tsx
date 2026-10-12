import {ImperativeShowcase} from '@/widgets/imperative-showcase';
import styles from './styles.module.css';

export const ImperativeDemoPage = () => (
    <div className={styles.page}>
        <h1>useImperativeHandle</h1>
        <p className={styles.note}>
            <a href={'https://github.com/darianebogina/indexedDB'} target="_blank" rel="noreferrer">Репозиторий с примером</a>
        </p>
        <ImperativeShowcase/>
    </div>
);
