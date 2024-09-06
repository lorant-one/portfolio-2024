import React from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    className?: string;
    style?: React.CSSProperties;
}

const TableHead: React.FC<TableHeadProps> = ({ className, style, children, ...props }) => {
    return (
        <thead className={classNames(styles.thead, 'font-label', 'font-m', 'font-strong', className)} style={style} {...props}>
            {children}
        </thead>
    );
};

TableHead.displayName = 'TableHead';

export { TableHead };