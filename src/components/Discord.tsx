import { Arrow, Button, Column, Flex, Heading, HoloFx, Icon, LetterFx, SmartImage, SmartLink, Text, TiltFx } from "@/once-ui/components";
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
            border="neutral-alpha-medium"
            overflow="hidden">
            <Column
                position="relative"
                fillWidth>
                <SmartImage
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    aspectRatio="16 / 9"
                    alt="Design Engineers Club Discord cover"
                    src="/images/store/cover/oversized-hoodie-anime.jpg"/>
                <Flex
                    fillWidth
                    aspectRatio="16 / 9"
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
                <Column
                    zIndex={3}
                    radius="xl"
                    pointerEvents="none"
                    className={styles.position}
                    style={{
                        background: 'linear-gradient(to right, var(--page-background) 0%, var(--static-transparent) 60%)',
                    }}
                    fillWidth padding="xl">
                    {children ? (
                        children
                    ) : (
                        <Column fill gap="40"
                            vertical="center">
                            <Flex gap="m" vertical="center">
                                <Icon name="discord"/>
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
                                    }}
                                    arrowIcon>
                                    <LetterFx>
                                        Join now
                                    </LetterFx>
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
                        </Column>
                    )}
                </Column>
            </Column>
        </HoloFx>
    )
}

export { Discord };