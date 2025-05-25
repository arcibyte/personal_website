export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        // Navegación
        'nav.home': 'Inicio',
        'nav.blog': 'Blog',

        // Profile.astro
        'profile.span': 'Hola',
        'profile.span1': 'Este soy yo',
        'profile.role': 'Desarrollador creativo y Estudiante de Ciencia de Datos',
        'profile.description':
            'Creando código lúdico y con propósito desde 2019, impulsado por la curiosidad por los algoritmos, el software elegante y las experiencias de usuario intuitivas.',
        'profile.cta': 'Envíame un correo',
        'profile.cta.aria': 'Enviar un correo a arcibyte@gmail.com',

        //Proyectos.astro
        'projects.title': 'Proyectos destacados',
        'projects.view': 'Ver proyecto',
        'projects.code': 'Código en GitHub',
        "projects.project1.title": "Proyecto 1",
        "projects.project1.description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "projects.project2.title": "Proyecto 2",
        "projects.project2.description": "Adaptación de equipos",
        "projects.project3.title": "Proyecto 3",
        "projects.project3.description": "Sincronización y coordinación del equipo.",
        "projects.project4.title": "Proyecto 4",
        "projects.project4.description": "Descripción breve.",
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.blog': 'Blog',

        // Profile.astro
        'profile.span': 'Hello',
        'profile.span1': 'That’s me',
        'profile.role': 'Creative Dev & Data Science Student',
        'profile.description':
            'Crafting playful and purposeful code since 2019, driven by curiosity for algorithms, elegant software, and intuitive user experiences.',
        'profile.cta': 'Send me an email',
        'profile.cta.aria': 'Send an email to arcibyte@gmail.com',

        //Projects.astro
        'projects.title': 'Featured Projects',
        'projects.view': 'View project',
        'projects.code': 'View on GitHub',
        "projects.project1.title": "Project 1",
        "projects.project1.description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "projects.project2.title": "Project 2",
        "projects.project2.description": "Team adaptation",
        "projects.project3.title": "Project 3",
        "projects.project3.description": "Team synchronization and coordination.",
        "projects.project4.title": "Project 4",
        "projects.project4.description": "Short description.",
    },
} as const;
