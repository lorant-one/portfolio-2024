import { Button, Flex, Heading, InlineCode, RevealFx, SmartImage, Tag, Text } from "@/once-ui/components";
import classNames from "classnames";
import Image from "next/image";

import styles from './Cover.module.scss'

function Cover() {
    return (
        <Flex
            position="relative"
            fillWidth direction="column" radius="xl" border="neutral-medium" borderStyle="solid-1"
            style={{overflow: 'hidden'}}>
            <Flex fillWidth gap="12" padding="24"
                justifyContent="space-between" mobileDirection="column">
                <Flex direction="column" gap="4">
                    <Tag>Gear up!</Tag>
                    <Heading
                        variant="display-default-xs" as="h2" wrap="balance"
                        marginTop="8" marginBottom="8">
                        My merch store is here!
                    </Heading>
                    <Text
                        onBackground="neutral-weak" wrap="balance"
                        marginBottom="4">
                        Get your design engineer T-shirt, hoodie or gaming desk mat - use <InlineCode>LONE10</InlineCode> at checkout.
                    </Text>
                </Flex>
                <Button
                    href="https://store.dopler.app/promo/LONE10"
                    suffixIcon="chevronRight"
                    label="Visit store"/>
            </Flex>
            <Flex position="relative" fillWidth direction="column">
                <SmartImage
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    tabIndex={0}
                    alt="Design Engineers Club merch store cover"
                    aspectRatio="16 / 9"
                    src="/images/store/cover/oversized-hoodie-anime.jpg"
                    style={{
                        border: '1px solid var(--neutral-alpha-weak)'
                    }}/>
                <Flex
                    fillWidth
                    style={{
                        aspectRatio: '16 / 9',
                    }}
                    position="absolute" zIndex={1}>
                    <Image className={classNames(styles.rock, styles.rock1)}
                        fill
                        priority
                        sizes="(max-width: 1080px) 100vw, 1024px"
                        src={'/images/store/cover/oversized-hoodie-anime-layer-1.png'}
                        alt="Design Engineers Club cover anime style background"/>
                    <Image className={classNames(styles.rock, styles.rock2)}
                        fill
                        priority
                        sizes="(max-width: 1080px) 100vw, 1024px"
                        src={'/images/store/cover/oversized-hoodie-anime-layer-2.png'}
                        alt="Design Engineers Club cover anime style overlay"/>
                    <Image className={classNames(styles.rock, styles.rock3)}
                        fill
                        priority
                        sizes="(max-width: 1080px) 100vw, 1024px"
                        src={'/images/store/cover/oversized-hoodie-anime-layer-3.png'}
                        alt="Design Engineers Club cover anime style overlay"/>
                    <Image className={classNames(styles.rock, styles.rock4)}
                        fill
                        priority
                        sizes="(max-width: 1080px) 100vw, 1024px"
                        src={'/images/store/cover/oversized-hoodie-anime-layer-4.png'}
                        alt="Design Engineers Club cover anime style overlay"/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export { Cover };