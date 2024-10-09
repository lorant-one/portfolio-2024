'use client';

import { useState } from 'react';
import { Accordion, Button, Flex, Heading, Icon, LetterFx, SegmentedControl, Text } from '@/once-ui/components';
import { Carousel } from '@/once-ui/components/Carousel';
import styles from '@/app/store/store.module.scss';
import { Mailchimp } from '@/app/components';

type ItemDetailsProps = {
    item: {
        title: string;
        description: string;
        launched: boolean;
        images: string[];
        price: number;
        features: string[];
    };
};

export default function ItemDetails({ item }: ItemDetailsProps) {
    const [selectedSize, setSelectedSize] = useState('m');

    const toggleSize = (newSize: string) => {
        setSelectedSize(newSize);
    };

    return (
        <Flex
            gap="xl"
            fillWidth
            tabletDirection="column"
            as="section">
            <Flex
                className={styles.reOrder}
                position="relative"
                fillWidth
                flex={7}>
                <Carousel
                    aspectRatio="5 / 4"
                    indicator="media"
                    images={item.images}/>
            </Flex>
            <Flex
                flex={4}
                gap="s"
                fillWidth
                direction="column">
                <Button
                    href="/store"
                    size="s"
                    variant="tertiary"
                    prefixIcon="chevronLeft">
                    All products
                </Button>
                <Heading
                    wrap="balance"
                    variant="display-strong-xs"
                    as="h1">
                    <span className="font-code">
                        <LetterFx trigger="instant">
                            {item.title}
                        </LetterFx>
                    </span>
                </Heading>
                {item.launched && 
                    <Text
                        wrap="balance"
                        variant="label-default-l"
                        onBackground="neutral-weak"
                        marginBottom="16">
                        ${item.price}
                    </Text>
                }
                <Text
                    wrap="balance"
                    variant="body-default-m"
                    onBackground="neutral-weak"
                    marginBottom="16">
                    {item.description}
                </Text>
                {item.launched && 
                    <>
                        <Flex fillWidth gap="32" alignItems="center">
                            <SegmentedControl
                                buttons={[
                                    { label: 'xs' },
                                    { label: 's' },
                                    { label: 'm' },
                                    { label: 'l' },
                                    { label: 'xl' }
                                ]}
                                onToggle={(value) => toggleSize(value)}
                                defaultSelected="m"/>
                            <Text style={{textWrap: 'nowrap'}}
                                variant="label-default-s"
                                onBackground="brand-medium">
                                Size guide
                            </Text>
                        </Flex>
                        <Button fillWidth>
                            Add to cart
                        </Button>
                    </>
                }
                {item.features.map((feature, index) => (
                    <Flex alignItems="center" gap="8" key={index}>
                        <Icon name="check" onBackground="brand-medium" size="s"/>
                        {feature}
                    </Flex>
                ))}
                {item.launched ? ( 
                    <Flex
                        style={{overflow:'hidden'}}
                        direction="column"
                        background="surface"
                        fillWidth maxWidth="xs"
                        border="neutral-medium" borderStyle="solid-1" radius="l"
                        marginTop="12" marginBottom="8">
                        <Accordion
                            title={<Text variant="body-strong-s">Quality</Text>}>
                            <Text
                                onBackground="neutral-medium"
                                variant="body-default-s">
                                We guarantee top quality. If your item is damaged and the quality is compromised, we replace it or refund your purchase.
                            </Text>
                        </Accordion>
                        <Accordion
                            title={<Text variant="body-strong-s">Returns</Text>}>
                            <Text
                                onBackground="neutral-medium"
                                variant="body-default-s">
                                Orders are made on demand, so we do not offer general returns or sizing-related returns.
                            </Text>
                        </Accordion>
                    </Flex>
                ) : (
                    <Flex fillWidth marginTop="24">
                        <Mailchimp
                            compact
                            avatar={false}
                            heading="Coming soon"
                            description="Get notified when we launch!"/>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
}