import {useEffect, useRef} from 'react';
import {SmartInput} from '@/features/imperative-input';
import type {SmartInputHandle} from '@/features/imperative-input';
import {Button, Panel, useIsTabActive} from '@/shared/ui';
import styles from './styles.module.css';

export const ImperativeShowcase = () => {
    const inputRef = useRef<SmartInputHandle>(null);
    const isTabActive = useIsTabActive();

    useEffect(() => {
        if (isTabActive) {
            inputRef.current?.focus();
        }
    }, [isTabActive]);

    return (
        <Panel>
            <div className={styles.column}>
                <SmartInput ref={inputRef}/>
                <Button onClick={() => inputRef.current?.clear()}>Очистить</Button>
            </div>
        </Panel>
    );
};
