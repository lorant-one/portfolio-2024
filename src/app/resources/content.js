import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Lorant',
    lastName:  'Toth',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.png',
    location:  'Europe/Vienna',          // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hungarian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>An irregular blend of personal insights and professional updates</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/lorantart',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/tothlorant',
    },
    {
        name: 'X (Twitter)',
        icon: 'x',
        link: 'https://www.x.com/lorant_one',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:lorant@once-ui.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.firstName}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Design engineer by day, creative by night</>,
    subline: <>Helping designers code and developers design with Once UI</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I’m a Vienna-based design engineer with a passion for all things creative. I design and build web apps, contribute to open-source projects, experiment with generative AI, paint digitally, and occasionally pick up a pen to sketch on paper.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Notable projects',
        experiences: [
            {
                company: 'Once UI',
                timeframe: '2022 - Present',
                role: 'Co-founder',
                achievements: [
                    <>An open-source Next.js and Figma design system.</>
                ],
            },
            {
                company: 'Creatillo',
                timeframe: '2019 - Present',
                role: 'Solo founder',
                achievements: [
                    <>A place for my creative works from the pre-AI era.</>
                ],
            },
            {
                company: 'Kinsta',
                timeframe: '202? - 2023',
                role: 'Designer',
                achievements: [
                    <>Boring design system stuff.</>
                ],
            },
            {
                company: 'Boring',
                timeframe: 'Don\'t even \'member',
                role: 'Designer',
                achievements: [
                    <>More boring design system stuff.</>
                ],
            },
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Include a concise overview of your key responsibilities, highlighting your direct impact on the organization, such as improved processes, cost savings, or revenue generation.</>,
                images: [
                    {
                        src: '/images/projects/project-01/image-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/image-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    "images": [
        {
        "src": "/images/gallery/img-01.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-02.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-03.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-04.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-05.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-06.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-07.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-08.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-09.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-10.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-11.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-12.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-13.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-14.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-15.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-16.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-17.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-18.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-19.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-20.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-21.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-22.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-23.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-24.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-25.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-26.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-27.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-28.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-29.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-30.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-31.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-32.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-33.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-34.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-35.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-36.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-37.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-38.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-39.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-40.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-41.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-42.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-43.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-44.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-45.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-46.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-47.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-48.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-49.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-50.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-51.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-52.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-53.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-54.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-55.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-56.jpg",
        "alt": "image",
        "orientation": "vertical"
        },
        {
        "src": "/images/gallery/img-57.jpg",
        "alt": "image",
        "orientation": "vertical"
        }
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };