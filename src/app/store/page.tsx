import { Flex } from '@/once-ui/components';
import { Cover } from './components/Cover';

export default function Store() {
    return (
        <Flex
            direction="column"
            fillWidth maxWidth="m"
            paddingY="xl" paddingX="m"
            alignItems="center">
            <Cover/>
        </Flex>
    );
}
