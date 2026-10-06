import { Children, isValidElement, ReactElement, ReactNode } from 'react';

export const mapChildren = <P = any>(
    children: ReactNode,
    func: (el: ReactElement<P>, index: number) => any,
) => {
    let index = 0;

    return Children.map(children, (child) =>
        isValidElement<P>(child) ? func(child, index++) : child,
    );
};
