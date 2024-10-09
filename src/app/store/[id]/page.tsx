import inventory from '../inventory';
import { Button, Flex, Heading } from '@/once-ui/components';

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
		</Flex>
	);
}

export async function generateStaticParams() {
	return inventory.map((item) => ({
		id: item.id,
	}));
}