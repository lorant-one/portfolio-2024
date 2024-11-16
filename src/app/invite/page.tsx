
import { about, baseURL, home, person, routes } from '@/app/resources';
import { Flex } from '@/once-ui/components';
import { Invite } from './Invite';

export async function generateMetadata({ params, searchParams }: { params: any, searchParams: { from?: string, to?: string } }) {
    const from = searchParams?.from || 'Lorant';
    const to = searchParams?.to || 'Oncer';

    const title = `${to}'s Club Pass`;
    const description = `${from} has invited you to join the Design Engineers Club.`;
    const ogImageUrl = `https://${baseURL}/og?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/invite`,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ogImageUrl,
        },
    };
}

export default function Home() {
    return (
        <Flex
            flex={1}
            fillWidth maxWidth="m"
            direction="column"
            justifyContent="center">
            <Invite/>
        </Flex>
    );
}