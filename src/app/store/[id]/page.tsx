import inventory from '../inventory';
import { Button, Flex, Grid, Heading, Icon, LetterFx, SegmentedControl, Text } from '@/once-ui/components';

import Hero from '../components/Hero';

type Params = {
    params: {
        id: string;
    };
};

export default function Template({ params }: Params) {
	const { id } = params;

	const item = inventory.find((item) => item.id === id);
	
	if (!item) {
		return (
			<Flex fillWidth gap="m"
				direction="column" alignItems="center" justifyContent="center"
				textVariant="display-strong-xs">
				Item not found
				<Button
					href="/store"
					label="Back to store"/>
			</Flex>
		);
	}

	return (
		<Flex
			direction="column"
			fillWidth maxWidth="l"
			paddingX="l" paddingTop="m" gap="l">
			<Hero item={item}/>
			<Heading 
				variant="display-strong-xs" 
				align="center"
				as="h2"
				paddingTop="l">
				Features
			</Heading>
			<Flex
				fillWidth
				justifyContent="center" alignItems="center"
				paddingY="xl" gap="m">
				Get started now
				<Button 
					variant="tertiary"
					prefixIcon="IoLogoVercel"
					label="Deploy to Vercel"/>
			</Flex>
		</Flex>
	);
}

export async function generateStaticParams() {
	return inventory.map((item) => ({
		id: item.id,
	}));
}