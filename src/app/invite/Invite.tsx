'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Arrow, Button, Column, Flex, Heading, Input, Row, SmartLink, Text, TiltFx } from '@/once-ui/components';
import { Discord } from '@/components/Discord';

export function Invite() {
    const searchParams = useSearchParams();
    const editor = searchParams?.get('editor') === 'true';
    const defaultFrom = searchParams?.get('from') || 'Lorant';
    const defaultTo = searchParams?.get('to') || 'Oncer';

    const [from, setFrom] = useState(defaultFrom);
    const [to, setTo] = useState(defaultTo);
    const [icon, setIcon] = useState('clipboard');

    const emailLink = `https://lorant.one/invite?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

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
                    <Column
                        fillWidth gap="20" paddingY="40" paddingX="24"
                        vertical="space-between">
                        <Heading align="center" variant="display-default-s" marginBottom="24">
                            Create your personal invite to the Design Engineers Club!
                        </Heading>
                        <Flex fillWidth vertical="center" gap="-1" mobileDirection="column" marginBottom="40">
                            <Input
                                radius="left"
                                height="s"
                                id="from"
                                label="From"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                            <Input
                                radius="none"
                                height="s"
                                id="to"
                                label="To"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                            <Button
                                size="l"
                                radius="right"
                                label="Copy link"
                                prefixIcon={icon}
                                onClick={handleCopy}
                            />
                        </Flex>
                    </Column>
                </Flex>
            )}
            <TiltFx>
                <Discord>
                    <Column maxWidth={32} fillHeight vertical="center" gap="16">
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
                            style={{ pointerEvents: 'all' }}
                            arrowIcon>
                            Accept invite
                        </Button>
                    </Column>
                </Discord>
            </TiltFx>
            {!editor && (
                <Row fillWidth horizontal="center">
                    <Column fillWidth gap="40" paddingY="160" paddingX="24" maxWidth="s">
                        <Heading variant="display-default-s">
                            Ready to join the Design Engineers Club?
                        </Heading>
                        <Text variant="body-default-m" wrap="balance">
                            <Text as="p" marginBottom="24">
                                The world is changing faster than ever—AI is evolving, corporations are locking down creativity, and the future is being built without us. We believe it doesn’t have to be this way.
                            </Text>
                            <Text as="p" marginBottom="24" wrap="balance">
                                The Design Engineers Club is a decentralized movement of designers, developers, and creators who refuse to just watch—we build. We connect. We create our own opportunities.
                            </Text>
                            <Text as="p" wrap="balance">
                                No bosses. No corporate structure. Just people shaping the future together.
                            </Text>
                        </Text>
                        <SmartLink href="/blog/our-future" suffixIcon="arrowRight" iconSize="s">Read more</SmartLink>
                    </Column>
                </Row>
            )}
        </>
    );
}