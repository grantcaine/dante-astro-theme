export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};



export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
};

const siteConfig: SiteConfig = {
    title: 'Boort Veterinary Services',
    subtitle: 'Info, Contact and Opening Hous.',
    description: 'BVS web site, providing information to clients.',
    image: {
        src: '/dante-preview.jpg',
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Opening Hours',
            href: '/projects'
        },
        
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/boortvets'
        },
        
        
    ],
    hero: {
        title: 'Welcome to Boort Veterinary Services!',
        text: "At Boort veterinary services we offer consultation (small and large animals), vaccination, microchipping, surgery, radiography, dentistry, herd health advice, grooming and more. Please contact the clinic with any queries, 8:30-17:00 M-F or follow me on <a href='https://www.facebook.com/boortvets'>Facebook</a>.",
        image: {
            src: '/hero.jpeg',
        
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
