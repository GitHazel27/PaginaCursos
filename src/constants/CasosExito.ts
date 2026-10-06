export interface CasosExito{
    id: number;
    category: string;
    name: string;
    role: string;
    course: string
    testimonial: string;
    image: string;
}

export const successStories: CasosExito[] =([
  {
    id: 1,
    category: 'Datos y Analítica',
    name: 'Valeria Gómez',
    role: 'De Asistente Administrativa a Analista Junior',
    course: 'Fundamentos de Power BI',
    testimonial: 'Automatizar la limpieza de reportes semanales con Power Query redujo mi carga operativa de tres días a solo dos horas. Presentar tableros interactivos a la gerencia fue el factor clave para mi ascenso.',
    image:'https://media.istockphoto.com/id/1389348844/es/foto/foto-de-estudio-de-una-hermosa-joven-sonriendo-mientras-est%C3%A1-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=kUufmNoTnDcRbyeHhU1wRiip-fNjTWP9owjHf75frFQ=',
  },
  {
    id: 2,
    category: 'Negocios',
    name: 'Mateo Fernández',
    role: 'Fundador de marca de diseño local',
    course: 'Publicidad en Redes Sociales',
    testimonial: 'Invertía en anuncios sin una segmentación clara y solo conseguía likes. Al aprender a definir audiencias personalizadas y optimizar el costo por adquisición, tripliqué mis pedidos en línea el primer mes.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDOs4S3IGpu3ZoxYk2d5fzJB0MH5cCyibWRz6Lnd4eA&s=10',
  },
  {
    id: 3,
    category: 'Carrera Internacional',
    name: 'Sofía Morales',
    role: 'Project Coordinator en empresa remota',
    course: 'English for Interviews and Networking',
    testimonial: 'Tenía el nivel técnico pero me bloqueaba en las preguntas situacionales. Dominar la técnica STAR en inglés me dio la seguridad para responder con fluidez y negociar mi contrato en una empresa de EE. UU.',
    image:'https://img.magnific.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740&q=80',
  }
])