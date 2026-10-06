import React, { ReactNode } from 'react';

export type TabProps = {
    title: string;
    eventKey: string;
    children: ReactNode;
};

export const TabComponent: React.FC<TabProps> = () => {
    throw new Error(
        'The `Tab` component is not meant to be rendered! ' +
            "It's an abstract component that is only valid as a direct Child of the `Tabs` Component.",
    );
};
