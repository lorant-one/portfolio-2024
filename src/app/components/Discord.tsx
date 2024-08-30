import { Button, Flex, Heading, LetterFx, SmartImage, Text } from "@/once-ui/components";

const Discord = () => {
    return (
        <Flex
            direction="column" fillWidth>
            <Flex fillWidth height="24">
                <Flex fillWidth maxWidth="24"></Flex>
                <Flex fillWidth style={{borderLeft: '1px solid var(--neutral-border-medium)', borderRight: '1px solid var(--neutral-border-medium)'}}></Flex>
                <Flex fillWidth maxWidth="24"></Flex>
            </Flex>
            <Flex fillWidth>
                <Flex fillWidth maxWidth="24" fillHeight style={{borderTop: '1px solid var(--neutral-border-medium)', borderBottom: '1px solid var(--neutral-border-medium)'}}></Flex>
                <Flex
                    position="relative" fillWidth
                    direction="column" justifyContent="center" alignItems="center"
                    borderStyle="solid-1" border="neutral-medium">
                    <SmartImage style={{background: 'transparent', position: 'absolute', filter: 'blur(2rem) brightness(1.3)'}}
                        src="/images/ui/cityscape.jpg"
                        alt="Cityscape illustration"/>
                    <SmartImage style={{background: 'transparent', position: 'absolute'}}
                        src="/images/ui/cityscape.jpg"
                        alt="Cityscape illustration"/>
                    <Flex style={{backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6))'}}
                        position="relative" zIndex={1}
                        direction="column"
                        fillWidth paddingX="xl" paddingY="l" gap="l">
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
                        <Heading style={{maxWidth: '24rem'}}
                            as="h2"
                            variant="display-strong-s">
                            The palace of design engineers
                        </Heading>
                        <Button
                            href="https://discord.com/invite/5EyAQ4eNdS"
                            suffixIcon="chevronRight">
                            <LetterFx>
                                Join now
                            </LetterFx>
                        </Button>
                    </Flex>
                </Flex>
                <Flex fillWidth maxWidth="24" fillHeight style={{borderTop: '1px solid var(--neutral-border-medium)', borderBottom: '1px solid var(--neutral-border-medium)'}}></Flex>
            </Flex>
            <Flex fillWidth height="24">
                <Flex fillWidth maxWidth="24"></Flex>
                <Flex fillWidth style={{borderLeft: '1px solid var(--neutral-border-medium)', borderRight: '1px solid var(--neutral-border-medium)'}}></Flex>
                <Flex fillWidth maxWidth="24"></Flex>
            </Flex>
        </Flex>
    )
}

export { Discord };