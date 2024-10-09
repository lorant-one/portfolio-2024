"use client";

import { Flex, Heading, LetterFx, SmartImage, SmartLink, Tag, Text } from '@/once-ui/components';
import styles from '@/app/blog/components/Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';
import { useState } from 'react';

interface PostProps {
    post: any;
    thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
    const [trigger, setTrigger] = useState<() => void>(() => () => {});

    return (
        <SmartLink
            className={styles.hover}
            onMouseEnter={() => {
                trigger();
            }}
            style={{
                textDecoration: 'none',
                margin: '0',
                height: 'fit-content',
            }}
            key={post.slug}
            href={`/blog/${post.slug}`}>
            <Flex
                position="relative"
                mobileDirection="column"
                fillWidth paddingY="12" paddingX="16" gap="32">
                {post.metadata.image && thumbnail && (
                    <Flex
                        maxWidth={20} fillWidth
                        className={styles.image}>
                        <SmartImage
                            priority
                            sizes="640px"
                            style={{
                                cursor: 'pointer',
                                border: '1px solid var(--neutral-alpha-weak)'
                            }}
                            radius="m"
                            src={post.metadata.image}
                            alt={'Thumbnail of ' + post.metadata.title}
                            aspectRatio="16 / 9"
                        />
                    </Flex>
                )}
                <Flex
                    position="relative"
                    fillWidth gap="8"
                    direction="column" justifyContent="center">
                    <Heading
                        as="h2"
                        variant="code-strong-xl"
                        wrap="balance">
                        <LetterFx
                            onTrigger={(handler) => setTrigger(() => handler)}
                            trigger="custom"
                            speed="medium">
                            {post.metadata.title}
                        </LetterFx>
                    </Heading>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(post.metadata.publishedAt, false)}
                    </Text>
                    <Tag
                        className="mt-8"
                        label={post.metadata.tag}
                        variant="neutral" />
                </Flex>
            </Flex>
        </SmartLink>
    );
}