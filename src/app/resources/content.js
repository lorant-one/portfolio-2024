import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
    firstName: 'Lorant',
    lastName:  'One',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/Vienna',          // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hungarian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>The Design Engineers Weekly</>,
    description: <>A blend of product updates and personal insights</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/lorant-one',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/lorant-one',
    },
    {
        name: 'Threads',
        icon: 'threads',
        link: 'https://www.threads.com/@lorant.one',
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
    subline: <>Empowering indie creators to ignite their creativity with the Design Engineers Club</>
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
        display: false,
        link: 'https://cal.com/designedge/intro'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I’m a Vienna-based design engineer with a passion for all things creative. I <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}><Link href="/work">design and build</Link></InlineCode> web apps, <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}><Link href="https://github.com/lorant-one" target="_blank">contribute</Link></InlineCode> to open-source projects, experiment with generative AI, <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}><Link href="https://creatillo.com" target="_blank">paint digitally</Link></InlineCode> and occasionally pick up a pen to <InlineCode style={{padding: 'var(--static-space-2) var(--static-space-8)'}}><Link href="/blog/from-my-sketchbook">sketch</Link></InlineCode> on paper.</>
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Notable projects',
        experiences: [
            {
                company: 'Dopler',
                timeframe: '2024 - Present',
                role: 'Co-founder',
                achievements: [
                    <>Established our "holding company" to impress VCs. /s</>
                ],
                images: []
            },
            {
                company: 'Enroll',
                timeframe: '2024 - Present',
                role: 'Co-founder',
                achievements: [
                    <>Launched our first SaaS app for building micro-communities.</>
                ],
                images: []
            },
            {
                company: 'Design Engineers Club',
                timeframe: '2024 - Present',
                role: 'Community founder',
                achievements: [
                    <>Engaging and growing a thriving community of creative folks.</>
                ],
                images: []
            },
            {
                company: 'Once UI',
                timeframe: '2022 - Present',
                role: 'Founder',
                achievements: [
                    <>Designing and (over)engineering an open-source Next.js and Figma design system.</>
                ],
                images: []
            },
            {
                company: 'Creatillo',
                timeframe: '2019 - Present',
                role: 'Creator',
                achievements: [
                    <>A showcase-app for the Journal of the Universe.</>
                ],
                images: []
            },
            {
                company: 'Journal of the Universe',
                timeframe: '2017 - Present',
                role: 'Creator',
                achievements: [
                    <>Digital paintings and stories I made in the pre-AI era.</>
                ],
                images: []
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
    title: 'Writing about AI, design and tech...',
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

const store = {
    label: 'Store'
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    "images": [
        {
        "src": "/images/gallery/img-01.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "56mm | 1/1250 | f11 | ISO100",
        "location": "Zillertal, Austria",
        },
        {
        "src": "/images/gallery/img-02.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "59mm | 1/100 | f11 | ISO100",
        "location": "Učka, Croatia",
        },
        {
        "src": "/images/gallery/img-03.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/20 | f22 | ISO100",
        "location": "Falasarna Beach, Crete",
        },
        {
        "src": "/images/gallery/img-04.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "27mm | 1/250 | f9.0 | ISO100",
        "location": "Sao Lourenco, Madeira"
        },
        {
        "src": "/images/gallery/img-06.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/250 | f9.0 | ISO100",
        "location": "Guimaraes, Portugal"
        },
        {
        "src": "/images/gallery/img-42.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/125 | f3.5 | ISO200",
        "location": "Paiva Walkways, Portugal"
        },
        {
        "src": "/images/gallery/img-07.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/50 | f7.1 | ISO1600",
        "location": "Kissamos, Croatia"
        },
        {
        "src": "/images/gallery/img-52.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "45mm | 1/60 | f7.1 | ISO320",
        "location": "Seoul, South Korea"
        },
        {
        "src": "/images/gallery/img-09.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/160 | f11 | ISO100",
        "location": "Seitan Limania, Crete"
        },
        {
        "src": "/images/gallery/img-22.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "135mm | 1/30 | f11 | ISO250",
        "location": "Seoul, South Korea"
        },
        {
        "src": "/images/gallery/img-35.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/80 | f5.6 | ISO200",
        "location": "Peneda-Gerês, Portugal"
        },
        {
        "src": "/images/gallery/img-24.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "51mm | 1/400 | f11 | ISO100",
        "location": "Tatra Mountains, Poland"
        },
        {
        "src": "/images/gallery/img-26.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/100 | f7.1 | ISO100",
        "location": "Zakopane, Poland"
        },
        {
        "src": "/images/gallery/img-30.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "28mm | 1/500 | f5.6 | ISO100",
        "location": "Großglockner, Austria"
        },
        {
        "src": "/images/gallery/img-31.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "33mm | 1/640 | f4.5 | ISO125",
        "location": "Schladming, Austria"
        },
        {
        "src": "/images/gallery/img-33.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/1250 | f9.0 | ISO125",
        "location": "Dachstein, Austria"
        },
        {
        "src": "/images/gallery/img-57.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "22mm | 1/500 | f4.0 | ISO100",
        "location": "Seoul, South Korea"
        },
        {
        "src": "/images/gallery/img-34.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "51mm | 1/200 | f5.0 | ISO200",
        "location": "Peneda-Gerês, Portugal"
        },
        {
        "src": "/images/gallery/img-45.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 25.0 | f3.5 | ISO800",
        "location": "Crete, Greece"
        },
        {
        "src": "/images/gallery/img-53.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Seoul, South Korea"
        },
        {
        "src": "/images/gallery/img-58.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "67mm | 1/80 | f7.1 | ISO250",
        "location": "Levada Nova, Madeira"
        },
        {
        "src": "/images/gallery/img-59.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "28mm | 1/8 | f22 | ISO100",
        "location": "Budapest, Hungary"
        },
        {
        "src": "/images/gallery/img-60.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 13.0 | f11 | ISO100",
        "location": "Dubai, UAE"
        },
        {
        "src": "/images/gallery/img-74.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "75mm | 1/80 | f6.3 | ISO200",
        "location": "Bled, Slovenia"
        },
        {
        "src": "/images/gallery/img-61.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/400 | f13 | ISO100",
        "location": "Dubai, UAE"
        },
        {
        "src": "/images/gallery/img-62.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/125 | f11 | ISO320",
        "location": "Morskie Oko, Poland"
        },
        {
        "src": "/images/gallery/img-66.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/25 | f11 | ISO100",
        "location": "Sardinia, Italy"
        },
        {
        "src": "/images/gallery/img-67.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "92mm | 1/80 | f7.1 | ISO200",
        "location": "Amsterdam, Netherlands"
        },
        {
        "src": "/images/gallery/img-68.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "27mm | 1/3 | f25 | ISO100",
        "location": "Sao Miguel, Azores"
        },
        {
        "src": "/images/gallery/img-69.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/250 | f11 | ISO125",
        "location": "Fanal Forest, Madeira"
        },
        {
        "src": "/images/gallery/img-63.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "27mm | 1/200 | f4.5 | ISO250",
        "location": "Zakopane, Poland"
        },
        {
        "src": "/images/gallery/img-75.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "32mm | 1/50 | f9.0 | ISO320",
        "location": "Bohinj, Slovenia"
        },
        {
        "src": "/images/gallery/img-85.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/50 | f5.6 | ISO640",
        "location": "Budapest, Hungary"
        },
        {
        "src": "/images/gallery/img-84.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "50mm | 1/50 | f5.6 | ISO200",
        "location": "Budapest, Hungary"
        },
        {
        "src": "/images/gallery/img-72.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "18mm | 1/40 | f22 | ISO100",
        "location": "Sao Miguel, Azores"
        },
        {
        "src": "/images/gallery/img-73.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "63mm | 1/40 | f6.3 | ISO500",
        "location": "Bohinj, Slovenia"
        },
        {
        "src": "/images/gallery/img-76.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Madeira, Portugal"
        },
        {
        "src": "/images/gallery/img-64.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Zakopane, Poland"
        },
        {
        "src": "/images/gallery/img-70.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Azores, Portugal"
        },
        {
        "src": "/images/gallery/img-77.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Zell am See, Austria"
        },
        {
        "src": "/images/gallery/img-78.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Madeira, Portugal"
        },
        {
        "src": "/images/gallery/img-79.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Bled, Slovenia"
        },
        {
        "src": "/images/gallery/img-80.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Madeira, Portugal"
        },
        {
        "src": "/images/gallery/img-81.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Cyprus, Greece"
        },
        {
        "src": "/images/gallery/img-65.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Zakopane, Poland"
        },
        {
        "src": "/images/gallery/img-82.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Halstatt, Austria"
        },
        {
        "src": "/images/gallery/img-71.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Azores, Portugal"
        },
        {
        "src": "/images/gallery/img-83.jpg",
        "alt": "image",
        "orientation": "vertical",
        "technical": "91mm | 1/15 | f5.6 | ISO200",
        "location": "Budapest, Hungary"
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery, store };