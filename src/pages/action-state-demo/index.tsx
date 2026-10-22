import {ContactForm} from '@/features/contact-form';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';

export const ActionStateDemoPage = () => (
    <div className={styles.page}>
        <h1>useActionState</h1>
        <Panel>
            <ContactForm/>
        </Panel>
    </div>
);
