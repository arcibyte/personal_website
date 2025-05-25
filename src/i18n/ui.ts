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
    },
} as const;
