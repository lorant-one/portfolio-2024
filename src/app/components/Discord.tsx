import { Button, Flex, Heading, LetterFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import classNames from "classnames";
import Image from "next/image";

import styles from './Discord.module.scss'

function Discord() {
    return (
        <Flex
            position="relative"
            fillWidth direction="column">
            <SmartImage
                style={{border: '1px solid var(--neutral-alpha-medium)'}}
                priority
                radius="xl"
                sizes="(max-width: 1080px) 100vw, 1024px"
                aspectRatio="16 / 9"
                alt="Design Engineers Club merch store cover"
                src="/images/store/cover/oversized-hoodie-anime.jpg"/>
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
            <Flex
                zIndex={1}
                radius="xl"
                className={styles.position}
                style={{background: 'linear-gradient(to right, var(--page-background), var(--static-transparent))'}}
                direction="column" justifyContent="center"
                fillWidth padding="xl" gap="40">
                <Flex gap="m" alignItems="center">
                    <Flex width="32">
                        <SmartImage style={{background: 'transparent'}}
                            aspectRatio="1 / 1"
                            src="/trademark/discord-dark.svg"
                            alt="Discord trademark"/>
                    </Flex>
                    <Text variant="label-default-s">
                        /
                    </Text>
                    <Text variant="label-default-s">
                        Once UI
                    </Text>
                </Flex>
                <Flex gap="8" fillWidth
                    direction="column">
                    <Heading
                        as="h2"
                        variant="display-strong-s"
                        wrap="balance">
                        Design Engineers Club
                    </Heading>
                    <Text
                        onBackground="neutral-medium"
                        variant="heading-default-s"
                        wrap="balance">
                        It's time. The revolution begins.
                    </Text>
                </Flex>
                <Flex gap="m" mobileDirection="column">
                    <Button
                        href="https://discord.com/invite/5EyAQ4eNdS"
                        suffixIcon="chevronRight">
                        <LetterFx>
                            Join now
                        </LetterFx>
                    </Button>
                    <SmartLink href="https://club.dopler.io">
                        <Flex textVariant="code-default-s" paddingY="12">
                            <LetterFx>
                                Learn more
                            </LetterFx>
                        </Flex>
                    </SmartLink>
                </Flex>
            </Flex>
        </Flex>
    )
}

export { Discord };