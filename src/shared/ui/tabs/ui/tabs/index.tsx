import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { TabProps } from '../tab';
import { TabButton } from '../tab-button';
import { mapChildren } from './lib';
import styles from './styles.module.css';

type TabsProps = {
    children: ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const isActive = (eventKey: string, index: number) =>
        activeTab ? activeTab === eventKey : index === 0;

    return (
        <div>
            <ul className={styles.tabs} role="tablist">
                {mapChildren<TabProps>(children, (child, index) => {
                    const { title, eventKey } = child.props;

                    return (
                        <TabButton
                            title={title}
                            eventKey={eventKey}
                            selected={isActive(eventKey, index)}
                            onClick={() => setActiveTab(eventKey)}
                        />
                    );
                })}
            </ul>

            {mapChildren<TabProps>(children, (child, index) => {
                const { eventKey, children: childChildren } = child.props;

                return (
                    <div
                        role="tabpanel"
                        id={`panel-${eventKey}`}
                        aria-labelledby={`tab-${eventKey}`}
                        className={clsx(!isActive(eventKey, index) && styles.hidden)}
                    >
                        {childChildren}
                    </div>
                );
            })}
        </div>
    );
};
