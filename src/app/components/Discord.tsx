import { Arrow, Button, Flex, Heading, HoloFx, LetterFx, SmartImage, SmartLink, Text, TiltFx } from "@/once-ui/components";
import classNames from "classnames";
import Image from "next/image";

import styles from './Discord.module.scss'

import { ReactNode } from "react";

type DiscordProps = {
    children?: ReactNode;
};


function Discord({
    children
}: DiscordProps) {
    return (
        <HoloFx fillWidth radius="xl"
            style={{
                border: '1px solid var(--neutral-alpha-medium)',
                overflow: 'hidden'
                }}>
            <Flex
                position="relative"
                fillWidth direction="column">
                <SmartImage
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    aspectRatio="16 / 9"
                    alt="Design Engineers Club Discord cover"
                    src="/images/store/cover/oversized-hoodie-anime.jpg"/>
                <Flex
                    fillWidth
                    style={{
                        aspectRatio: '16 / 9'
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
                    zIndex={3}
                    radius="xl"
                    className={styles.position}
                    style={{
                        pointerEvents: 'none',
                        background: 'linear-gradient(to right, var(--page-background) 0%, var(--static-transparent) 60%)',
                    }}
                    direction="column"
                    fillWidth padding="xl">
                    {children ? (
                        children
                    ) : (
                        <Flex fillWidth fillHeight gap="40"
                            direction="column" justifyContent="center">
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
                                    id="joinNow"
                                    href="https://club.dopler.io"
                                    style={{
                                        pointerEvents: 'all'
                                    }}>
                                    <Flex alignItems="center">
                                    <LetterFx>
                                        Join now
                                    </LetterFx>
                                    <Arrow color="onSolid" trigger="#joinNow"/>
                                    </Flex>
                                </Button>
                                <SmartLink href="/invite?editor=true&from=Oncer&to=Oncer"
                                    style={{
                                        pointerEvents: 'all'
                                    }}>
                                    <Flex textVariant="code-default-s" paddingY="12">
                                        <LetterFx>
                                            Send an invite
                                        </LetterFx>
                                    </Flex>
                                </SmartLink>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </HoloFx>
    )
}

export { Discord };