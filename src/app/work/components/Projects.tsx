import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';

import { ProjectCard } from '@/app/components';
import { SpacingToken } from '@/once-ui/types';

interface ProjectsProps {
    range?: [number, number?];
    maxWidth?: number | SpacingToken;
    slug?: string;
}

export function Projects({ range, maxWidth = 'xs', slug }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', 'work', 'projects']);

    if (slug) {
        allProjects = allProjects.filter(project => project.slug === slug);
    }

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post) => (
                <ProjectCard
                    key={post.slug}
                    href={`/work/${post.slug}`}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    maxWidth={maxWidth}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
    );
}