"use client";

import { mailchimp } from '@/app/resources'
import { Button, Heading, Input, Text, Background, Column, Avatar, Row } from '@/once-ui/components';
import { useState } from 'react';

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export const Mailchimp = (
    { newsletter }: { newsletter: NewsletterProps}
) => {
    const [email, setEmail] = useState<string>('');

    const subscribeToBeehiiv = async (email: string) => {
        try {
            const response = await fetch('/api/beehiiv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });
    
            if (!response.ok) {
                try {
                    const errorData = await response.json();
                    console.error('Failed to subscribe:', errorData);
                } catch (parseError) {
                    console.error('Failed to parse error response:', parseError);
                }
            } else {
                try {
                    const data = await response.json();
                    console.log('Successfully subscribed!', data);
                } catch (parseError) {
                    console.error('Failed to parse response:', parseError);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Column
            overflow="hidden"
            position="relative"
            fillWidth padding="xl"  radius="l" marginBottom="m"
            horizontal="center" align="center"
            background="surface" border="neutral-alpha-weak" shadow="xl">
            <Background
                mask={{
                    cursor: mailchimp.effects.mask.cursor,
                    x: mailchimp.effects.mask.x,
                    y: mailchimp.effects.mask.y,
                    radius: mailchimp.effects.mask.radius
                }}
                gradient={{
                    display: mailchimp.effects.gradient.display,
                    x: mailchimp.effects.gradient.x,
                    y: mailchimp.effects.gradient.y,
                    width: mailchimp.effects.gradient.width,
                    height: mailchimp.effects.gradient.height,
                    tilt: mailchimp.effects.gradient.tilt,
                    colorStart: mailchimp.effects.gradient.colorStart,
                    colorEnd: mailchimp.effects.gradient.colorEnd,
                    opacity: mailchimp.effects.gradient.opacity as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
                }}
                dots={{
                    display: mailchimp.effects.dots.display,
                    color: mailchimp.effects.dots.color,
                    size: mailchimp.effects.dots.size as any,
                    opacity: mailchimp.effects.dots.opacity as any
                }}
                grid={{
                    display: mailchimp.effects.grid.display,
                    color: mailchimp.effects.grid.color,
                    width: mailchimp.effects.grid.width as any,
                    height: mailchimp.effects.grid.height as any,
                    opacity: mailchimp.effects.grid.opacity as any
                }}
                lines={{
                    display: mailchimp.effects.lines.display,
                    opacity: mailchimp.effects.lines.opacity as any
                }}/>
            <Avatar position="relative" size="l" src="/images/avatar.jpg" marginBottom="24"/>
            <Heading style={{position: 'relative'}}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            <Row
                center
                gap="8"
                fillWidth>
                <Row maxWidth={20}>
                    <Input
                        labelAsPlaceholder
                        id="newsletter-email"
                        type="email"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required/>
                </Row>
                <Button
                    id="newsletter-button"
                    onClick={() => subscribeToBeehiiv(email)}
                    size="m"
                    arrowIcon>
                    Sign up
                </Button>
            </Row>
        </Column>
    )
}