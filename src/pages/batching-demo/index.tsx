import {BatchingComparison} from '@/widgets/batching-comparison';
import styles from './styles.module.css';

export const BatchingDemoPage = () => (
    <div className={styles.page}>
        <h1>Автобатчинг</h1>
        <BatchingComparison/>
    </div>
);
