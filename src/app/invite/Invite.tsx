'use client';

import { useSearchParams } from 'next/navigation';
import { Discord } from '../components';
import { Arrow, Button, Flex, Heading, Text, TiltFx } from '@/once-ui/components';

export function Invite() {
    const searchParams = useSearchParams();
    const from = searchParams?.get('from') || 'Lorant';
    const to = searchParams?.get('to') || 'Oncer';

    return (
        <TiltFx>
            <Discord>
                <Flex maxWidth={32} fillHeight direction="column" justifyContent="center" gap="16">
                    <Heading
                        style={{textTransform: 'capitalize'}}
                        wrap="balance"
                        variant="display-strong-m">
                        {to}<Text weight="default">'s</Text><br/><Text weight="default">Club pass</Text>
                    </Heading>
                    <Text
                        marginBottom="32"
                        variant="body-default-m" wrap="balance"
                        style={{ transform: 'translate3D(0, 0, 5px)' }}>
                        <Text style={{textTransform: 'capitalize'}}>{from}</Text> has invited you to join the<br/>
                        <Text as="div" variant="code-default-xl" onBackground="brand-medium">Design Engineers Club</Text>
                    </Text>
                    <Button
                        id="accept"
                        href="https://club.dopler.io"
                        style={{pointerEvents: 'all'}}>
                        <Flex alignItems="center">
                            Accept invite
                            <Arrow color="onSolid" trigger="#accept"/>
                        </Flex>
                    </Button>
                </Flex>
            </Discord>
        </TiltFx>
    );
}