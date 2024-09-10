import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, SmartImage, LetterFx, RevealFx } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, person, routes } from '@/app/resources'
import { Mailchimp } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';
import { Discord } from './components/Discord';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
		},
	};
}

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
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
			<Flex
				fillWidth
				direction="column"
				paddingY="l"
				gap="m">
				<Heading
					wrap="balance"
					variant="display-strong-l">
					<span className="font-label">
						<LetterFx trigger="instant">
							{home.headline}
						</LetterFx>
					</span>
				</Heading>
				<RevealFx
                    translateY="8"
					delay={0.2}
                    speed="fast">
					<Text
						wrap="balance" 
						onBackground="neutral-weak"
						variant="display-default-xs">
						{home.subline}
					</Text>
				</RevealFx>
				<RevealFx
                    translateY="12"
					delay={0.4}
                    speed="fast">
					<Button
						data-border="rounded"
						href="/about"
						variant="tertiary"
						suffixIcon="chevronRight"
						size="m">
						<Flex
							gap="8"
							alignItems="center">
							{about.avatar.display && (
								<Avatar
									style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
									src={person.avatar}
									size="m"/>
								)}
								<LetterFx>
									About me
								</LetterFx>
						</Flex>
					</Button>
				</RevealFx>
			</Flex>
			<Projects maxWidth="s" range={[1,1]}/>
			<Discord/>
			{routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,2]} columns="2"/>
				</Flex>
			)}
			<Projects maxWidth="s" range={[2]}/>
			<Mailchimp/>
		</Flex>
	);
}
