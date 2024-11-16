'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Discord } from '../components';
import { Arrow, Button, Flex, Heading, Input, Text, TiltFx } from '@/once-ui/components';
import { baseURL } from '../resources';

export function Invite() {
    const searchParams = useSearchParams();
    const editor = searchParams?.get('editor') === 'true';
    const defaultFrom = searchParams?.get('from') || 'Lorant';
    const defaultTo = searchParams?.get('to') || 'Oncer';

    const [from, setFrom] = useState(defaultFrom);
    const [to, setTo] = useState(defaultTo);

    const emailLink = `https://${baseURL}/invite?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    return (
        <>
            {editor && (
                <Flex fillWidth paddingX="xl" paddingY="24">
                    <Flex
                        fillWidth gap="20" paddingX="16" paddingTop="24" paddingBottom="16" marginBottom="24"
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
                                prefixIcon="clipboard"
                                onClick={() => navigator.clipboard.writeText(emailLink)}
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