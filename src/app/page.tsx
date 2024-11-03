import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, LetterFx, RevealFx } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, person, routes } from '@/app/resources'
import { Mailchimp, ProjectCard } from '@/app/components';
import { Posts } from '@/app/blog/components/Posts';
import { Discord } from './components/Discord';
import { Store } from './components/Store';

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
				paddingTop="l"
				paddingBottom="16"
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
			<Flex
				direction="column"
				fillWidth gap="12">
				<RevealFx
					translateY="8"
					delay={0.6}
					speed="fast">
					<Heading
						as="h2"
						variant="display-strong-m">
						My work
					</Heading>
					<Text onBackground="neutral-weak">
						— Notable projects
					</Text>
				</RevealFx>
			</Flex>
			<Projects maxWidth="s" range={[1,1]}/>
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
					<Flex flex={3} paddingX="20">
						<Posts range={[1,2]} columns="2"/>
					</Flex>
				</Flex>
			)}
			<Projects maxWidth="s" range={[2]}/>
			<Store/>
			<Flex
				direction="column"
				fillWidth gap="12">
				<Heading
					as="h2"
					variant="display-strong-m">
					Fragments
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
							aspectRatio="16 / 9"
							images={['/images/projects/fragments/fragment-05.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}>
						</ProjectCard>
						<ProjectCard
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-03.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}>
						</ProjectCard>
					</Flex>
					<Flex direction="column" fillWidth gap="l">
						<ProjectCard
							href=""
							aspectRatio="2 / 3"
							images={['/images/projects/fragments/fragment-02.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}/>
					</Flex>
				</Flex>
				<ProjectCard
					href=""
					aspectRatio="4 / 3"
					images={['/images/projects/fragments/fragment-01.jpg']}
					title=""
					content=""
					maxWidth="s"
					avatars={[{src: "/"}]}/>
				<Flex fillWidth gap="l" mobileDirection="column">
					<Flex direction="column" fillWidth gap="l">
					<ProjectCard
							href=""
							aspectRatio="13 / 6"
							images={['/images/projects/fragments/fragment-04.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}/>
						<ProjectCard
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-06.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}/>
					</Flex>
					<Flex direction="column" fillWidth gap="l">
						<ProjectCard
							sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 480px"
							href=""
							aspectRatio="1 / 1"
							images={['/images/projects/fragments/fragment-07.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}/>
						<ProjectCard
							href=""
							aspectRatio="13 / 6"
							images={['/images/projects/fragments/fragment-08.jpg']}
							title=""
							content=""
							maxWidth="s"
							avatars={[{src: "/"}]}/>
					</Flex>
				</Flex>
			</Flex>
			<Mailchimp/>
		</Flex>
	);
}
