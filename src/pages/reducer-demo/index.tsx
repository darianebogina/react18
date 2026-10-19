import {AnnuityCalculator} from '@/features/annuity-calculator';
import {Panel} from '@/shared/ui';
import styles from './styles.module.css';

export const ReducerDemoPage = () => (
    <div className={styles.page}>
        <h1>useReducer</h1>
        <p className={styles.note}>
            Калькулятор аннуитетного платежа. Всё состояние формы — сумма, ставка и срок в месяцах —
            управляется одним редьюсером. Компонент только отправляет действия через dispatch,
            а редьюсер сам очищает ввод: оставляет только цифры и ограничивает ставку сотыми.
            Платёж, общая сумма и переплата вычисляются из состояния чистой функцией на каждом рендере.
        </p>
        <Panel>
            <AnnuityCalculator/>
        </Panel>
    </div>
);
