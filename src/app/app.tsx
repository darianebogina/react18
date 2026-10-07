import {SearchDemoPage} from '@/pages/search-demo';
import {BatchingDemoPage} from '@/pages/batching-demo';
import {TabComponent, Tabs} from '@/shared/ui/tabs';
import styles from './styles.module.css';

export const App = () => (
    <div className={styles.app}>
        <Tabs>
            <TabComponent eventKey="search" title="useTransition + Suspense">
                <SearchDemoPage/>
            </TabComponent>
            <TabComponent eventKey="batching" title="Automatic batching">
                <BatchingDemoPage/>
            </TabComponent>
        </Tabs>
    </div>
);
