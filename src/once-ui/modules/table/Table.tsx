'use client';

import React, { forwardRef } from 'react';

import styles from './Table.module.scss'
import classNames from 'classnames';
import { Flex } from '@/once-ui/components';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    className?: string;
    style?: React.CSSProperties;
}

const Table = forwardRef<HTMLTableElement, TableProps>(({
    className,
    style,
    children,
    ...props
}, ref) => {
    return (
        <Flex fillWidth overflowX="auto">
            <table
                border={0} cellSpacing="0" cellPadding="0"
                ref={ref} className={classNames(styles.table, className)} style={style} {...props}>
                {children}
            </table>
        </Flex>
    );
});

Table.displayName = 'Table';

export { Table };