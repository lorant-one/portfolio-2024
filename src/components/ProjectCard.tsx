"use client";

import { AvatarGroup, Carousel, Column, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { SpacingToken } from "@/once-ui/types";

interface ProjectCardProps {
    href: string;
    aspectRatio?: string;
    sizes?: string;
    maxWidth?: SpacingToken | number;
    priority?: boolean;
    images: string[];
    title: string;
    content: string;
    description?: string;
    avatars?: { src: string }[];
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    sizes = "(max-width: 960px) 100vw, 960px",
    aspectRatio = "16 / 9",
    maxWidth,
    images = [],
    title,
    content,
    description,
    avatars,
    link,
}) => {
    return (
        <Column
            maxWidth={maxWidth}
            fillWidth gap="m">
            <Carousel
                aspectRatio={aspectRatio}
                sizes={sizes}
                images={images.map(image => ({
                src: image,
                alt: title
            }))}/>
            <Flex
                mobileDirection="column"
                fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l">
                {title && (
                    <Flex
                        flex={5}>
                        <Heading
                            as="h2"
                            wrap="balance"
                            variant="heading-strong-xl">
                            {title}
                        </Heading>
                    </Flex>
                )}
                {( (avatars && avatars?.length > 0) || description?.trim() || content?.trim()) && (
                    <Column
                        flex={7}
                        gap="16">
                        {avatars && avatars?.length > 0 && (
                            <AvatarGroup
                                avatars={avatars}
                                size="m"
                                reverse/>
                        )}
                        {description?.trim() && (
                            <Text
                                wrap="balance"
                                variant="body-default-s"
                                onBackground="neutral-weak">
                                {description}
                            </Text>
                        )}
                        <Flex gap="24" wrap>
                            {content?.trim() && (
                                <SmartLink
                                    suffixIcon="arrowRight"
                                    style={{margin: '0', width: 'fit-content'}}
                                    href={href}>
                                        <Text
                                            variant="body-default-s">
                                        Read case study
                                        </Text>
                                </SmartLink>
                            )}
                            {link && (
                                <SmartLink
                                    suffixIcon="arrowUpRightFromSquare"
                                    style={{ margin: "0", width: "fit-content" }}
                                    href={link}>
                                    <Text variant="body-default-s">View project</Text>
                                </SmartLink>
                            )}
                        </Flex>
                    </Column>
                )}
            </Flex>
        </Column>
    );
};
