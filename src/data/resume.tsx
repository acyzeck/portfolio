import { Icons } from '@/components/icons';
import { HomeIcon, ChevronsLeftRightIcon, NotebookPenIcon } from 'lucide-react';

export const DATA = {
    name: 'Clark Walrath',
    initials: 'CW',
    url: 'https://dillion.io',
    location: 'San Diego, CA',
    locationLink: 'https://www.google.com/maps/place/sandiego',
    description:
        'Developer turned entrepreneur, I love building solutions and helping others.',
    summary:
        "I'm a passionate developer who transitioned into entrepreneurship. My journey began with creating games, and now I focus on blending creativity and code to solve real-world problems. Whether I'm [prototyping a new idea](#projects) or collaborating with others, I bring energy, curiosity, and a love for building.",
    avatarUrl: '/me.png',
    skills: [
        'React',
        'Next.js',
        'Typescript',
        'Node.js',
        'Python',
        'Go',
        'Postgres',
        'Docker',
        'Kubernetes',
        'Java',
        'C++',
    ],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: '/projects', icon: ChevronsLeftRightIcon, label: 'Projects' },
        { href: '/blog', icon: NotebookPenIcon, label: 'Blog' },
    ],
    contact: {
        email: '44walrath@gmail.com',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://dub.sh/clark-github',
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://dub.sh/dillion-linkedin',
                icon: Icons.linkedin,

                navbar: false,
            },
            X: {
                name: 'X',
                url: 'https://dub.sh/clark-twitter',
                icon: Icons.x,

                navbar: true,
            },
            Youtube: {
                name: 'Youtube',
                url: 'https://bit.ly/clark-youtube',
                icon: Icons.youtube,
                navbar: false,
            },
            Instagram: {
                name: 'Instagram',
                url: 'https://dub.sh/clark-instagram',
                icon: Icons.instagram,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: 'Atomic Finance',
            href: 'https://atomic.finance',
            badges: [],
            location: 'Remote',
            title: 'Bitcoin Protocol Engineer',
            logoUrl: '/clark-dark.png',
            start: 'May 2021',
            end: 'Oct 2022',
            description:
                'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
        },
        {
            company: 'Atomic Finance',
            href: 'https://atomic.finance',
            badges: [],
            location: 'Remote',
            title: 'Bitcoin Protocol Engineer',
            logoUrl: '/clark-dark.png',
            start: 'May 2021',
            end: 'Oct 2022',
            description:
                'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
        },
    ],
    education: [
        {
            school: 'Buildspace',
            href: 'https://buildspace.so',
            degree: 's3, s4, sf1, s5',
            logoUrl: '/clark-light.png',
            start: '2023',
            end: '2024',
        },
        {
            school: 'Buildspace',
            href: 'https://buildspace.so',
            degree: 's3, s4, sf1, s5',
            logoUrl: '/clark-light.png',
            start: '2023',
            end: '2024',
        },
    ],
    projects: [
        {
            title: 'Clay Games',
            href: 'https://github.com/itscl4rk/Clay-Games',
            active: true,
            description:
                'Inspired by [neal.fun](https://neal.fun), Clay Games is a playful collection of web-based mini-games built to entertain, educate, and experiment with creative interactions—all in one simple, fun hub.',
            technologies: [
                'React',
                'Typescript',
                'TailwindCSS',
                'Vite',
                'Framer Motion',
            ],
            links: [
                {
                    type: 'Github',
                    href: 'https://github.com/itscl4rk/Clay-Games',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/projects/imgs/claygames.png',
            video: '',
        },
        {
            title: 'Clay Games',
            href: 'https://github.com/itscl4rk/Clay-Games',
            active: true,
            description:
                'Inspired by [neal.fun](https://neal.fun), Clay Games is a playful collection of web-based mini-games built to entertain, educate, and experiment with creative interactions—all in one simple, fun hub.',
            technologies: [
                'React',
                'Typescript',
                'TailwindCSS',
                'Vite',
                'Framer Motion',
            ],
            links: [
                {
                    type: 'Github',
                    href: 'https://github.com/itscl4rk/Clay-Games',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/projects/imgs/claygames.png',
            video: '',
        },
        {
            title: 'Clay Games',
            href: 'https://github.com/itscl4rk/Clay-Games',
            active: true,
            description:
                'Inspired by [neal.fun](https://neal.fun), Clay Games is a playful collection of web-based mini-games built to entertain, educate, and experiment with creative interactions—all in one simple, fun hub.',
            technologies: [
                'React',
                'Typescript',
                'TailwindCSS',
                'Vite',
                'Framer Motion',
            ],
            links: [
                {
                    type: 'Github',
                    href: 'https://github.com/itscl4rk/Clay-Games',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/projects/imgs/claygames.png',
            video: '',
        },
    ],
} as const;
