"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames';
import { Flex, Icon, InteractiveDetails, InteractiveDetailsProps } from '.';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends Omit<InteractiveDetailsProps, 'onClick'> {
    style?: React.CSSProperties;
    className?: string;
    isChecked?: boolean;
    isIndeterminate?: boolean;
    name?: string;
    value?: string;
    onToggle?: () => void;
}

const generateId = () => `checkbox-${Math.random().toString(36).substring(2, 9)}`;

const Checkbox: React.FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(({
    style,
    className,
    isChecked: controlledIsChecked,
    isIndeterminate = false,
    name,
    value,
    onToggle,
    ...interactiveDetailsProps
}, ref) => {
    const [isChecked, setIsChecked] = useState(controlledIsChecked || false);
    const [checkboxId] = useState(generateId());

    useEffect(() => {
        if (controlledIsChecked !== undefined) {
            setIsChecked(controlledIsChecked);
        }
    }, [controlledIsChecked]);

    const toggleItem = () => {
        if (onToggle) {
            onToggle();
        } else {
            setIsChecked(!isChecked);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleItem();
        }
    };

    return (
        <Flex alignItems="center" gap="16" className={classNames(styles.container, className)} style={style}>
            <input
                type="checkbox"
                ref={ref}
                name={name}
                value={value}
                checked={controlledIsChecked !== undefined ? controlledIsChecked : isChecked}
                onChange={toggleItem}
                className={styles.hidden}
            />
            <Flex
                role="checkbox"
                aria-checked={isIndeterminate ? 'mixed' : (controlledIsChecked !== undefined ? controlledIsChecked : isChecked)}
                aria-labelledby={checkboxId}
                position="relative"
                justifyContent="center"
                alignItems="center"
                background="surface"
                onClick={toggleItem}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                className={classNames(styles.checkbox, {
                    [styles.checked]: controlledIsChecked !== undefined ? controlledIsChecked || isIndeterminate : isChecked,
                })}>
                {(controlledIsChecked !== undefined ? controlledIsChecked : isChecked) && !isIndeterminate && (
                    <Icon
                        onSolid="brand-strong"
                        name="check"
                        size="xs"
                        className={styles.icon}/>
                )}
                {isIndeterminate && (
                    <Flex
                        radius="full"
                        className={`${styles.icon} ${styles.indeterminate}`}/>
                )}
            </Flex>
            <InteractiveDetails
                id={checkboxId}
                {...interactiveDetailsProps}
                onClick={toggleItem}
            />
        </Flex>
    );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps };