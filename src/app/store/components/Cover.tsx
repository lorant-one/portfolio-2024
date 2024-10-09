import { ProjectCard } from "@/app/components";
import { Button, Flex, Heading, RevealFx, SmartImage, Tag } from "@/once-ui/components";
import classNames from "classnames";
import Image from "next/image";

import styles from './Cover.module.scss'

function Cover() {
    return (
        <Flex position="relative" fillWidth direction="column">
            <RevealFx
                style={{width: '100%'}}
                delay={0.4}
                speed="fast">
                <SmartImage
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    tabIndex={0}
                    radius="l"
                    alt="ALT"
                    aspectRatio="16 / 9"
                    src="/images/store/cover/oversized-hoodie-anime.jpg"
                    style={{
                        border: '1px solid var(--neutral-alpha-weak)'
                    }}/>
            </RevealFx>
            <Flex
                fillWidth style={{aspectRatio: '16 / 9'}}
                position="absolute">
                <Image className={classNames(styles.rock, styles.rock1)}
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    src={'/images/store/cover/oversized-hoodie-anime-layer-1.png'}
                    alt="Oversized hoodie cover anime style"/>
                <Image className={classNames(styles.rock, styles.rock2)}
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    src={'/images/store/cover/oversized-hoodie-anime-layer-2.png'}
                    alt="Oversized hoodie cover anime style"/>
                <Image className={classNames(styles.rock, styles.rock3)}
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    src={'/images/store/cover/oversized-hoodie-anime-layer-3.png'}
                    alt="Oversized hoodie cover anime style"/>
                <Image className={classNames(styles.rock, styles.rock4)}
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 1024px"
                    src={'/images/store/cover/oversized-hoodie-anime-layer-4.png'}
                    alt="Oversized hoodie cover anime style"/>
            </Flex>
            <Flex
                style={{
                    top: '0',
                    left: '0',
                    background: 'radial-gradient(ellipse 75% 75% at bottom left, var(--static-black), var(--static-transparent))'
                }}
                className={styles.position}
                zIndex={1}
                fillWidth fillHeight
                alignItems="flex-end"
                padding="l">
                <Flex direction="column" flex={1} gap="12">
                    <RevealFx
                        speed="fast"
                        delay={1}
                        translateY="24">
                        <Tag size="l" label="Coming soon"/>
                        <Heading variant="display-default-s" as="h2" marginTop="8" marginBottom="m">
                            <span className="font-code">
                                Design Engineer's Oversized Hoodie
                            </span>
                        </Heading>
                    </RevealFx>
                    <Flex gap="32"
                        mobileDirection="column">
                        <Flex gap="8">
                            <RevealFx
                                speed="fast"
                                delay={1.2}
                                translateY="8">
                                <Flex
                                    style={{
                                        border: '1px solid var(--neutral-alpha-strong)',
                                        overflow: 'hidden'
                                    }}
                                    radius="l" shadow="l" width="80" height="80">
                                    <SmartImage
                                        aspectRatio="1 / 1"
                                        sizes="160px"
                                        src="/images/store/design-engineers-oversized-hoodie/image-01.jpg"
                                        alt="oversized hoodie"/>
                                </Flex>
                            </RevealFx>
                            <RevealFx
                                speed="fast"
                                delay={1.4}
                                translateY="12">
                                <Flex
                                    style={{
                                        border: '1px solid var(--neutral-alpha-strong)',
                                        overflow: 'hidden'
                                    }}
                                    radius="l" shadow="l" width="80" height="80">
                                    <SmartImage
                                        aspectRatio="1 / 1"
                                        sizes="160px"
                                        src="/images/store/design-engineers-oversized-hoodie/image-02.jpg"
                                        alt="oversized hoodie"/>
                                </Flex>
                            </RevealFx>
                            <RevealFx
                                speed="fast"
                                delay={1.6}
                                translateY="16">
                                <Flex
                                    style={{
                                        border: '1px solid var(--neutral-alpha-strong)',
                                        overflow: 'hidden'
                                    }}
                                    radius="l" shadow="l" width="80" height="80">
                                    <SmartImage
                                        priority
                                        aspectRatio="1 / 1"
                                        sizes="160px"
                                        src="/images/store/design-engineers-oversized-hoodie/image-03.jpg"
                                        alt="oversized hoodie"/>
                                </Flex>
                            </RevealFx>
                        </Flex>
                        <RevealFx
                            speed="fast"
                            delay={1.8}
                            translateY="16">
                            <Button
                                href="/store/design-engineers-oversized-hoodie"
                                label="Buy now"/>
                        </RevealFx>
                    </Flex>
                </Flex>
                <Flex flex={1} hide="s"></Flex>
            </Flex>
        </Flex>
    )
}

export { Cover };