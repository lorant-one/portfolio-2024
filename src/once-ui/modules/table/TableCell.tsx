import React from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    className?: string;
    style?: React.CSSProperties;
}

const TableCell: React.FC<TableCellProps> = ({ className, style, children, ...props }) => {
    return (
        <td className={classNames(styles.td, className)} style={style} {...props}>
            {children}
        </td>
    );
};

TableCell.displayName = 'TableCell';

export { TableCell };