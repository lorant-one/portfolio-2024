import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow, Column } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes } from '@/app/resources'; 
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp, ProjectCard } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { Store } from '@/components/Store';
import { Discord } from '@/components/Discord';

export async function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
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

export default function Home() {
	return (
		<Column
			maxWidth="m" gap="xl"
			horizontal="center">
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
			<Column
				fillWidth
				paddingY="l" gap="m">
				<Column
					maxWidth="m">
					<RevealFx
						translateY="4" fillWidth horizontal="start" paddingBottom="m">
						<Heading
							wrap="balance"
							variant="display-strong-l">
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="display-default-xs">
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4} horizontal="start">
						<Button
							id="about"
							data-border="rounded"
							href="/about"
							variant="secondary"
							size="m"
							arrowIcon>
							<Flex
								gap="8"
								vertical="center">
								{about.avatar.display && (
									<Avatar
										style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
										src={person.avatar}
										size="m"/>
									)}
									{about.title}
							</Flex>
						</Button>
					</RevealFx>
				</Column>
			</Column>
			<RevealFx translateY="16" delay={0.6}>
				<Projects range={[1,1]}/>
			</RevealFx>
			<Discord/>
			{routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						<Heading
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog
						</Heading>
					</Flex>
					<Flex
						flex={3} paddingX="20">
						<Posts range={[1,2]} columns="2"/>
					</Flex>
				</Flex>
			)}
			<Projects range={[2]}/>
			<Store/>
			<Flex
				direction="column"
				fillWidth gap="12">
				<Heading
					as="h2"
					variant="display-strong-m">
					Fragments of spacetime
				</Heading>
				<Text onBackground="neutral-weak">
					— Pieces from the drawer
				</Text>
			</Flex>
			<Flex fillWidth gap="l" direction="column">
			<Flex fillWidth gap="l" mobileDirection="column">
					<Flex direction="column" fillWidth gap="l">
					<ProjectCard
							href=""
							aspectRatio="13 / 6"
							images={['/images/projects/fragments/fragment-04.jpg']}
							title=""
							content=""/>
						<ProjectCard
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-06.jpg']}
							title=""
							content=""/>
					</Flex>
					<Flex direction="column" fillWidth gap="l">
						<ProjectCard
							sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 480px"
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-07.jpg']}
							title=""
							content=""/>
						<ProjectCard
							href=""
							aspectRatio="13 / 6"
							images={['/images/projects/fragments/fragment-08.jpg']}
							title=""
							content=""/>
					</Flex>
				</Flex>
				<ProjectCard
					href=""
					aspectRatio="4 / 3"
					images={['/images/projects/fragments/fragment-01.jpg']}
					title=""
					content=""/>
				<Flex fillWidth gap="l" mobileDirection="column">
					<Flex direction="column" fillWidth gap="l">
						<ProjectCard
							href=""
							aspectRatio="16 / 9"
							images={['/images/projects/fragments/fragment-05.jpg']}
							title=""
							content="">
						</ProjectCard>
						<ProjectCard
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-03.jpg']}
							title=""
							content="">
						</ProjectCard>
					</Flex>
					<Flex direction="column" fillWidth gap="l">
						<ProjectCard
							href=""
							aspectRatio="2 / 3"
							images={['/images/projects/fragments/fragment-02.jpg']}
							title=""
							content=""/>
					</Flex>
				</Flex>
			</Flex>
			{ newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Column>
	);
}
