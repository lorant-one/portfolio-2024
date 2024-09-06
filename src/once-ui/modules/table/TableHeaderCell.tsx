import React from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';

interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    style?: React.CSSProperties;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ className, style, children, ...props }) => {
    return (
        <th className={classNames(styles.th, className)} style={style} {...props}>
            {children}
        </th>
    );
};

TableHeaderCell.displayName = 'TableHeaderCell';

export { TableHeaderCell };