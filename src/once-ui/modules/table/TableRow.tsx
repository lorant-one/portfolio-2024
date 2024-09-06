import React from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    size?: 's' | 'm' | 'l';
    border?: boolean;
    interactive?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const TableRow: React.FC<TableRowProps> = ({
    size = 'm',
    border = true,
    interactive = false,
    className,
    style,
    children,
    ...props
}) => {
    return (
        <tr className={classNames(styles.tr, styles[size], interactive ? styles.interactive : '', border ? styles.border : '', className)} style={style} {...props}>
            {children}
        </tr>
    );
};

TableRow.displayName = 'TableRow';

export { TableRow };