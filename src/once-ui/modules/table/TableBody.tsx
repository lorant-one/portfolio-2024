import React from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
    style?: React.CSSProperties;
}

const TableBody: React.FC<TableBodyProps> = ({ className, style, children, ...props }) => {
    return (
        <tbody className={classNames(styles.tbody, 'font-body', 'font-s', 'font-default', 'neutral-on-background-medium', className)} style={style} {...props}>
            {children}
        </tbody>
    );
};

TableBody.displayName = 'TableBody';

export { TableBody };