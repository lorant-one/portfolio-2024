import { Avatar, Column, Heading, Row, Text } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL } from '@/app/resources'
import { blog, person, newsletter } from '@/app/resources/content';

export async function generateMetadata() {

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Blog() {
    return (
		<Column maxWidth="m" horizontal="center" gap="xl" paddingTop="l">
		<Column
			maxWidth="s">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
						author: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Column fillWidth gap="20" 
					marginBottom="l">
				<Heading
					variant="display-strong-s">
					{blog.title}
				</Heading>
				<Row vertical="center" gap="16">
					<Avatar src={person.avatar} size="s"/>
					<Text variant="label-default-s">By Lorant</Text>
				</Row>
			</Column>
			<Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Column>
			</Column>
			{newsletter.display && (
				<Mailchimp newsletter={newsletter} />
			)}
		</Column>
    );
}