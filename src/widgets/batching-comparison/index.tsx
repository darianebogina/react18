import {BatchedLoader} from '@/features/batched-loader';
import {UnbatchedLoader} from '@/features/unbatched-loader';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';

export const BatchingComparison = () => (
    <div className={styles.columns}>
        <Panel>
            <UnbatchedLoader/>
        </Panel>
        <Panel>
            <BatchedLoader/>
        </Panel>
    </div>
);
