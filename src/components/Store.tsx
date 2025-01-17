import { Arrow, Button, Flex, Grid, Heading, Scroller, SmartImage, SmartLink, Text } from "@/once-ui/components";
import styles from './Store.module.scss';

const content = [
    {
        title: 'Base Sirius - Oversized Hoodie',
        id: 'base-sirius-oversized-hoodie',
        images: [
            '/images/store/showcase/hoodie-01-1.webp',
            '/images/store/showcase/hoodie-01-2.webp'
        ]
    },
    {
        title: 'Hurth 6 - Heavyweight T-shirt',
        id: 'hurth-6-heavyweight-t-shirt',
        images: [
            '/images/store/showcase/tshirt-01-1.webp',
            '/images/store/showcase/tshirt-01-2.webp'
        ]
    },
    {
        title: 'Where We Belong - Gaming Desk Mat',
        id: 'where-we-belong-gaming-desk-mat',
        images: [
            '/images/store/showcase/deskmat-01-1.webp',
            '/images/store/showcase/deskmat-01-2.webp'
        ]
    },
    {
        title: 'Sagittarius A (Origins) - Matte Paper Print',
        id: 'sagittarius-a-origins-matte-paper-print-2',
        images: [
            '/images/store/showcase/print-01-1.webp',
            '/images/store/showcase/print-01-2.webp'
        ]
    },
    {
        title: 'The Revolution - Oversized Hoodie',
        id: 'the-revolution-oversized-hoodie',
        images: [
            '/images/store/showcase/hoodie-02-1.webp',
            '/images/store/showcase/hoodie-02-2.webp'
        ]
    },
    {
        title: 'Tee-Minus - Heavyweight T-shirt',
        id: 'tee-minus-heavyweight-t-shirt',
        images: [
            '/images/store/showcase/tshirt-02-1.webp',
            '/images/store/showcase/tshirt-02-2.webp'
        ]
    },
    {
        title: 'Forces - Gaming Desk Mat',
        id: 'forces-gaming-desk-mat',
        images: [
            '/images/store/showcase/deskmat-02-1.webp',
            '/images/store/showcase/deskmat-02-2.webp'
        ]
    },
    {
        title: 'Purple Worm (Origins) - Matte Paper Print',
        id: 'purple-worm-origins-matte-paper-print',
        images: [
            '/images/store/showcase/print-02-1.webp',
            '/images/store/showcase/print-02-2.webp'
        ]
    },
    {
        title: 'Visiting Proxima B - Oversized Hoodie',
        id: 'visiting-proxima-b-oversized-hoodie',
        images: [
            '/images/store/showcase/hoodie-03-1.webp',
            '/images/store/showcase/hoodie-03-2.webp'
        ]
    },
    {
        title: 'Escape Reality - Heavyweight T-shirt',
        id: 'escape-reality-heavyweight-t-shirt',
        images: [
            '/images/store/showcase/tshirt-03-1.webp',
            '/images/store/showcase/tshirt-03-2.webp'
        ]
    },
    {
        title: 'Sagittarius A - Gaming Desk Mat',
        id: 'sagittarius-a-gaming-desk-mat',
        images: [
            '/images/store/showcase/deskmat-03-1.webp',
            '/images/store/showcase/deskmat-03-2.webp'
        ]
    },
    {
        title: 'Proxima B (Origins) - Matte Paper Print',
        id: 'proxima-b-origins-matte-paper-print',
        images: [
            '/images/store/showcase/print-03-1.webp',
            '/images/store/showcase/print-03-2.webp'
        ]
    },
];

const extra = [
    {
        title: 'Proxima B (Origins) - Matte Paper Print',
        image: '/images/store/showcase/extra-01.webp',
    },
    {
        title: 'Proxima B (Origins) - Matte Paper Print',
        image: '/images/store/showcase/extra-02.webp',
    },
    {
        title: 'Proxima B (Origins) - Matte Paper Print',
        image: '/images/store/showcase/extra-03.webp',
    },
    {
        title: 'Proxima B (Origins) - Matte Paper Print',
        image: '/images/store/showcase/extra-04.webp',
    }
]

export function Store() {
    return (
        <Flex
            overflow="hidden"
            border="neutral-alpha-medium"
            direction="column"
            fillWidth radius="xl">
            <Flex
                paddingY="32" paddingX="l" gap="12"
                horizontal="space-between" vertical="center">
                <Heading as="h2" wrap="balance">
                    Gear up for the future
                </Heading>
                <Button id="shopNow"
                    href="https://store.dopler.app"
                    arrowIcon>
                    Shop now
                </Button>
            </Flex>
            <Scroller>
                <Flex gap="8" paddingX="16" paddingBottom="32">
                    {content.map((item) => (
                        <SmartLink unstyled key={item.id} href={`https://store.dopler.app/products/${item.id}`}>
                            <Flex direction="column" minWidth={16} gap="12">
                                <Flex
                                    style={{aspectRatio: '4 / 5'}}
                                    fillWidth
                                    data-theme="light"
                                    background="surface"
                                    position="relative"
                                    className={styles.imageContainer}
                                    radius="l">
                                    <SmartImage
                                        style={{cursor: 'pointer'}}
                                        sizes="240px"
                                        src={item.images[0]}
                                        alt={`${item.title} image`}
                                        className={styles.image}
                                    />
                                    <Flex position="absolute"
                                        fillWidth fillHeight
                                        className={`${styles.image} ${styles.hoverImage}`}>
                                    <SmartImage
                                        aria-hidden
                                        sizes="240px"
                                        style={{cursor: 'pointer'}}
                                        src={item.images[1]}
                                        alt={`${item.title} hover image`}
                                    />
                                    </Flex>
                                </Flex>
                                <Flex
                                    fillWidth paddingX="12">
                                    <Text
                                        onBackground="brand-medium"
                                        variant="code-default-m"
                                        wrap="balance">
                                        {item.title}
                                    </Text>
                                </Flex>
                            </Flex>
                        </SmartLink>
                    ))}
                    <SmartLink unstyled href="https://store.dopler.app/"
                        id="visitStore">
                        <Flex direction="column" gap="12" minWidth={16} fillWidth fillHeight>
                        <Grid columns="2" gap="8" padding="12" fillWidth style={{aspectRatio: '4 / 5'}}>
                            {extra.map((item) => (
                                <Flex radius="l" fillWidth fillHeight style={{overflow: 'hidden'}}>
                                    <Flex
                                        fillHeight
                                        fillWidth
                                        data-theme="light"
                                        background="surface"
                                        position="relative">
                                        <SmartImage
                                            cursor="interactive"
                                            sizes="120px"
                                            src={item.image}
                                            alt={`${item.title} image`}
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Grid>
                        <Flex
                            fillWidth paddingX="12" horizontal="center">
                            <Text
                                onBackground="brand-medium"
                                variant="code-default-m"
                                wrap="balance">
                                <Flex vertical="center" align="center">
                                    Visit store
                                    <Arrow trigger="#visitStore"/>
                                </Flex>
                            </Text>
                        </Flex>
                        </Flex>
                    </SmartLink>
                </Flex>
            </Scroller>
        </Flex>
    );
}
