'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Discord } from '../components';
import { Arrow, Button, Flex, Heading, Input, Text, TiltFx } from '@/once-ui/components';

export function Invite() {
    const searchParams = useSearchParams();
    const editor = searchParams?.get('editor') === 'true';
    const defaultFrom = searchParams?.get('from') || 'Lorant';
    const defaultTo = searchParams?.get('to') || 'Oncer';

    const [from, setFrom] = useState(defaultFrom);
    const [to, setTo] = useState(defaultTo);
    const [icon, setIcon] = useState('clipboard');

    const emailLink = `http://localhost:3000/invite?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(emailLink);
            setIcon('check');
            setTimeout(() => setIcon('clipboard'), 2000);
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };

    return (
        <>
            {editor && (
                <Flex fillWidth paddingX="xl">
                    <Flex
                        fillWidth gap="20" paddingX="12" paddingTop="24" paddingBottom="12" marginBottom="24"
                        border="neutral-medium" borderStyle="solid-1" background="surface" radius="xl"
                        direction="column" justifyContent="space-between">
                        <Flex paddingLeft="16">
                            Create your personal invite to the Design Engineers Club!
                        </Flex>
                        <Flex fillWidth gap="8" alignItems="center" mobileDirection="column">
                            <Input
                                height="s"
                                id="from"
                                label="From"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                            <Input
                                height="s"
                                id="to"
                                label="To"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                            <Button
                                label="Copy link"
                                prefixIcon={icon}
                                onClick={handleCopy}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            )}
            <TiltFx>
                <Discord>
                    <Flex maxWidth={32} fillHeight direction="column" justifyContent="center" gap="16">
                        <Heading
                            style={{ textTransform: 'capitalize' }}
                            wrap="balance"
                            variant="display-strong-m">
                            {to}<Text weight="default">'s</Text><br /><Text weight="default">Club pass</Text>
                        </Heading>
                        <Text
                            marginBottom="32"
                            variant="body-default-m" wrap="balance"
                            style={{ transform: 'translate3D(0, 0, 5px)' }}>
                            <Text style={{ textTransform: 'capitalize' }}>{from}</Text> has invited you to join the<br />
                            <Text as="div" variant="code-default-xl" onBackground="brand-medium">Design Engineers Club</Text>
                        </Text>
                        <Button
                            id="accept"
                            href="https://club.dopler.io"
                            style={{ pointerEvents: 'all' }}>
                            <Flex alignItems="center">
                                Accept invite
                                <Arrow color="onSolid" trigger="#accept" />
                            </Flex>
                        </Button>
                    </Flex>
                </Discord>
            </TiltFx>
        </>
    );
}