import inventory from './inventory';
import { Flex, Heading, SmartImage, Text } from '@/once-ui/components';
import styles from '@/app/store/store.module.scss';
import Link from 'next/link';

export default function Store() {
    return (
        <Flex
            direction="column"
            fillWidth maxWidth="m"
            paddingY="xl" paddingX="m"
            alignItems="center">
            <Heading
                as="h1"
                variant="display-strong-l"
                align="center"
                marginBottom="m">
                Templates
            </Heading>
            <Text
                variant="body-default-l"
                align="center"
                onBackground="neutral-medium"
                marginBottom="xl">
                Powerful templates to fuel your productivity.
            </Text>
            <Flex
                fillWidth alignItems="center"
                mobileDirection="column"
                gap="24">
                {inventory.map((template) => (
                    <Link
                        style={{
                            maxWidth: '28rem',
                            textDecoration: 'none',
                            overflow: 'hidden',
                        }}
                        href={`/templates/${template.id}`}
                        className={styles.card}
                        key={template.id}>
                        <Flex
                            background="surface"
                            fillWidth
                            direction="column">
                            <SmartImage
                                style={{cursor: 'pointer'}}
                                aspectRatio="16 / 9"
                                priority
                                sizes="480px"
                                alt={template.title}
                                src={template.images[0]}/>
                            <Flex 
                                padding="24" 
                                direction="column"
                                gap="8">
                                <Heading 
                                    as="h2" 
                                    variant="body-strong-m"
                                    onBackground="neutral-strong">
                                    {template.title}
                                </Heading>
                                <Text
                                    wrap="balance"
                                    variant="body-default-s"
                                    onBackground="neutral-weak">
                                    {template.description}
                                </Text>
                            </Flex>
                        </Flex>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
}
