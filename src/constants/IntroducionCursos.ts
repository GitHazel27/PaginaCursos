export interface IntroducionCurso {
    id: number;
    title: string;
    description: string;
    category: string;
    duration: string;
    lenguage: string;
    certification: string;
    image: string;
    information?: string;
    image2?: string;
}

export const introducionCursos: IntroducionCurso[] = [
    {
        id: 1,
        title: "Principios de programación en Python",
        description: "Aprende a programar desde cero con Python.",
        category: "Tecnología",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
        information: "Este curso te guiará desde un nivel basico hasta una comprensión sólida de los fundamentos de Python. Aprenderás a escribir código de forma clara y eficiente a través de lecciones interactivas, ejercicios prácticos y problemas reales.",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaP7BVoJN7Zsajaawyi24EtTdUwTusY4nlllWjnD_Ig&s=10",
    },
    {
        id: 2,
        title: "Principios de programación en JavaScript",
        description: "Aprende a programar desde cero con JavaScript.",
        category: "Tecnología",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
        information: "Este curso te guiará desde un nivel basico hasta una comprensión sólida de los fundamentos de JavaScript. Aprenderás a escribir código de forma clara y eficiente a través de lecciones interactivas, ejercicios prácticos y problemas reales.",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HNnSGPXYrPXt0MrSsR8oTJUbZ7wt_TuKO0vhQz2kUQ&s=10"
    },
    {
        id: 3,
        title: "Bussiness English",
        description: "Da el primer paso para comunicarte con confianza en inglés",
        category: "Idiomas",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Inglés",
        certification: "Certificado de finalización",
        image: "https://inglescostarica.com/wp-content/uploads/2024/02/aprender-ingles-conversacional-scaled.jpg",
        information: "Este curso de nivel intermedio, te ofrece la oportunidad de aprender inglés de negocios de manera práctica y divertida, siguiendo el día a día de Lola en la industria tecnológica.Descubrirás vocabulario, expresiones y frases útiles que podrás aplicar inmediatamente en tu trabajo.El formato podcast te permite aprender en cualquier lugar y a tu propio ritmo, potenciando tu perfil profesional de manera gratuita.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/666700705a5a8a49f84328eb/learningsImage-adc5c029-2b3b-47ee-9fbd-9960193c83bd.webp"
    },
    {
        id: 4,
        title: "Emprende con impacto",
        description: "Fortalece tus habilidades para la creación de soluciones innovadoras con tecnología y un enfoque de impacto social y ambiental.",
        category: "Emprendimiento",
        duration: "1 mes",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://usil-blog.s3.amazonaws.com/PROD/blog/image/proyecto-de-emprendimiento-2025_0.jpg",
        information: "Cursos enfocados en el desarrollo de soluciones innovadoras, pensamiento creativo, visión emprendedora y capacidad de liderazgo con certificación por: Scrimba, Tecnológico de Monterrey, Pontificia Universidad Católica de Chile, Universidad Austral y la Imperial College London.Esta formación en microcredenciales permitirá comprender, gestionar y acompañar mejor los desafíos del presente, contribuyendo a tu desarrollo personal y profesional.",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj01MLE1Kb07PB80xGacb_pI-5yzgBOlwJ5zeR8Aw2Zg&s=10"
    },
    {
        id: 5,
        title: "Impulso empresarial y emprendimiento",
        description: "Aprende a desarrollar tu idea de negocio y a crear un plan de acción para llevarla a cabo.",
        category: "Emprendimiento",
        duration: "3 meses",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://concepto.de/wp-content/uploads/2020/11/emprendimiento-e1676646804411.jpg",
        information: "Cursos enfocados en el desarrollo de soluciones innovadoras, pensamiento creativo, visión emprendedora y capacidad de liderazgo con certificación por: Scrimba, Tecnológico de Monterrey, Pontificia Universidad Católica de Chile, Universidad Austral y la Imperial College London.Esta formación en microcredenciales permitirá comprender, gestionar y acompañar mejor los desafíos del presente, contribuyendo a tu desarrollo personal y profesional..",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj01MLE1Kb07PB80xGacb_pI-5yzgBOlwJ5zeR8Aw2Zg&s=10"
    },
    {
        id: 6,
        title: "Publicidad en redes sociales",
        description: "Aprende a crear campañas publicitarias efectivas en redes sociales.",
        category: "Marketing",
        duration: "5 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://www.esic.edu/sites/default/files/2024-04/publicidad%20redes%20sociales%2C%20social%20ads%2C%20social%20ads%20ejemplos%2C%20que%20es%20social%20ads%2C%20campa%C3%B1a%20social%20ads%2C%20tipos%20de%20social%20ads.jpeg",
        information: "Con este curso aprenderás a crear campañas efectivas de publicidad en redes sociales, dominarás estrategias de contenido, segmentación de audiencias y anuncios en plataformas como Instagram, Facebook, TikTok y Twitch.Desde la definición de objetivos hasta la personalización de estrategias para distintos públicos, este curso te brinda las herramientas necesarias para aumentar tu alcance, engagement y conversiones.Ideal para emprendedores, community managers y profesionales del marketing que buscan aumentar su alcance y generar más engagement.A tu ritmo, sin coste y 100 % online. Además, al finalizar el curso podrás obtener un certificado que respalde tus conocimientos, ideal para mejorar tu CV, potenciar tu perfil de LinkedIn o acceder a mejores oportunidades laborales.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/67926700292949aa9b6edac3/descriptionImage-b492091b-48db-4471-993b-c1f2d9de90c3.webp"
    },
    {
        id: 7,
        title: "Excel-de básico a intermedio",
        description: "Aprende a utilizar Excel de manera efectiva para mejorar tu productividad y análisis de datos.",
        category: "Herramientas",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://res.cdn.office.net/midgard/versionless/apphome/app-home_v1_3685fd59bba86af9a2f2cd92b89ee5d4.webp",
        information: "¿Quieres aprender Excel desde cero y gestionar datos como un profesional? Durante el curso recorrerás paso a paso módulos enfocados en el uso eficiente de tablas de datos, segmentación y filtrado, funciones como BUSCARV y SI, y la vinculación entre hojas de cálculo.Dominarás el análisis y la gestión de datos como todo un experto. Con una metodología práctica y estructurada, aprenderás a trabajar con datos reales, optimizando tu tiempo y aumentando tu productividad. A tu ritmo, sin coste y 100 % online. Además, al finalizar el curso podrás obtener un certificado que respalde tus conocimientos, ideal para mejorar tu CV, potenciar tu perfil de LinkedIn o acceder a mejores oportunidades laborales.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/661d312e3817c02ad8c39c33/descriptionImage-ab4e9660-e431-46d0-955d-e9604b48ee02.webp"
    },
    {
        id: 8,
        title: "Fundamentos de Power BI",
        description: "Aprende a utilizar Power BI para analizar y visualizar datos de manera efectiva.",
        category: "Herramientas",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://thereportinghub.com/assets/images/Img_What-is-Power-BI-software_.webp",
        information: "Este curso introductorio de Power BI está dirigido a quienes quieren adentrarse en el análisis de datos. Aprenderás a utilizar esta herramienta poderosa para importar datos, crear informes y gráficos visuales, así como interactuar con ellos y aplicar filtros para explorar la información en tus conjuntos de datos. Además, te enseñaremos a transformar datos con el editor de Power Query, lo que mejorará el rendimiento y la presentación de tus datos de manera efectiva.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/668bc5995a5a8a49f843290c/descriptionImage-63adf99d-5ac8-4804-881f-62f74f227ccf.webp"
    },
    {
        id: 9,
        title: "Inglés para entrevistas y networking",
        description: "Aprende a comunicarte con confianza en inglés durante entrevistas y eventos de networking.",
        category: "Idiomas",
        duration: "6 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Inglés",
        certification: "Certificado de finalización",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHRKcQ4G2gYEhw2HYowM1QLukPwb2-X9QKFITvlkFu9LmIGVkTn8J9A0&s=10",
        information: "¿Tienes entrevistas de trabajo en inglés y no sabes cómo prepararte? ¿Quieres mejorar tu inglés profesional y causar una buena impresión? Con este curso, aprenderás a hablar con seguridad en entrevistas de trabajo, presentarte profesionalmente y construir relaciones laborales efectivas en inglés. Este curso está diseñado para ayudarte a: prepararte para entrevistas de trabajo en inglés con vocabulario y frases clave, dominar el elevator pitch y hablar con naturalidad en entornos profesionales y participar con confianza en reuniones, eventos de networking y procesos de selección internacionales. Si ya tienes un nivel intermedio alto (B2), este curso será tu mejor herramienta para avanzar en tu carrera, ampliar tus oportunidades laborales y destacar en entrevistas en inglés.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/687a28bc41ed344c3d50cdf3/learningsImage-e4a6fb3d-48d4-491e-8257-1a7a9028cc25.webp"
    },
    {
        id: 10,
        title: "Domina la IA con Gemini",
        description: "Aprende a usar la IA de Google para mejorar tu vida diaria. Gratis y online.",
        category: "Tecnología",
        duration: "2 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YsU8273ixuZv1wr2VvtjMUgJapJySnNbuOlTkoh0aQ&s=10",
        information: "Sumérgete directamente en el lado práctico de la IA con este programa práctico centrado en aplicaciones del mundo real. Dominarás los cuatro pilares del prompting efectivo, aprenderás a generar imágenes impresionantes con Nano Banana y Veo, realizarás investigaciones profundas en minutos e integrarás perfectamente la IA en tu espacio de trabajo de Google. No es una formación teórica, sino un conjunto de herramientas para implementación inmediata que transforma tu forma de trabajar, crear y resolver problemas.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/68ee601564a291c61f9c8131/descriptionImage-16ad21be-a690-4c4c-b066-94e064104090.webp"
    },
    {
        id: 11,
        title: "Fundamentos de marketing digital",
        description: "Aprende los conceptos básicos del marketing digital y cómo aplicarlos en tu negocio.",
        category: "Marketing",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew6v7CrrOe8bTaNx4iWw3QuVm8lJLdfcRrLiWRAAKuA&s=10",
        information: "¿Te has preguntado cómo algunas marcas logran conectar tan bien con su audiencia? La respuesta está en cómo cuentan sus historias. Este curso te enseña a usar la narrativa como una herramienta estratégica en entornos digitales, combinando creatividad con análisis. Aprenderás a estructurar mensajes que generen impacto, utilizando imágenes, música y métricas para medir su efectividad. Además, explorarás cómo alinear tus objetivos con las emociones del público para lograr una comunicación más auténtica. Este programa está diseñado para quienes buscan mejorar su forma de comunicar en plataformas digitales, desarrollar una voz propia y entender el valor de cada historia en el proceso de persuasión.A tu ritmo, sin coste y 100 % online. Además, al finalizar el curso podrás obtener un certificado que respalde tus conocimientos, ideal para mejorar tu CV, potenciar tu perfil de LinkedIn o acceder a mejores oportunidades laborales.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/65815d961fe51727116124bf/descriptionImage-f0e229cb-493a-4c42-91c4-febb54ebb03a.webp"
    },
    {
        id: 12,
        title: "Leadership",
        description: "Aprende a liderar equipos de manera efectiva y a desarrollar tus habilidades de liderazgo.",
        category: "Habilidades",
        duration: "8 horas lectivas, que podrás realizar a tu ritmo",
        lenguage: "Español, Inglés, Portugués",
        certification: "Certificado de finalización",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuxKpAo5KQvzPG4u6G0-DpU4RwxKYLkYUaHA8obnuOA&s=10",
        information: "Este curso te ayudará a desarrollar habilidades de liderazgo efectivas, incluyendo la comunicación, la toma de decisiones y la gestión de equipos. Aprenderás a motivar a tu equipo, resolver conflictos y fomentar un ambiente de trabajo positivo. Además, explorarás diferentes estilos de liderazgo y cómo adaptarlos a diversas situaciones para maximizar el rendimiento del equipo.",
        image2: "https://assets.santanderopenacademy.com/uploaded/courses/660a8b6690d15b044ee6dd74/learningsImage-2b73f94c-9066-4fe5-992a-5b64d90611e9.webp"
    }
]