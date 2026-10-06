<script setup lang="ts">
import { cardsCursos } from '@/constants/CardsCursos';
import imgCertificado from '../assets/imagenes/certificado.jpeg';
import { successStories } from '@/constants/CasosExito';

const topCursos = cardsCursos.slice(0, 3);
const preguntasFrecuentes = [
    {
        pregunta: '¿Los cursos son gratuitos?',
        respuesta: 'Sí, los cursos disponibles en SkillPulse son gratuitos.',
    },
    {
        pregunta: '¿Puedo estudiar a mi propio ritmo?',
        respuesta: 'Sí. Puedes organizar tus horarios y avanzar por el contenido del curso a tu ritmo.',
    },
    {
        pregunta: '¿Cómo me inscribo en un curso?',
        respuesta: 'Abre el curso que te interesa, selecciona “Inscribirme” y completa el formulario correspondiente.',
    },
    {
        pregunta: '¿Cómo consulto la información de un curso?',
        respuesta: 'Selecciona “Ver más” en el curso para consultar sus detalles antes de inscribirte.',
    },
    {
        pregunta: '¿Recibo un certificado al terminar?',
        respuesta: 'Al completar un curso puedes obtener un certificado de finalización para compartir tus conocimientos.',
    },
];
</script>

<template>
<div>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Bienvenido a SkillPulse</h1>
            <p class="hero-subtitle">Explora nuestros cursos gratuitos y mejora tus habilidades. Tu eliges cuándo empezar.</p>
            <h2 class="hero-heading">¡Aprende a tu propio ritmo! 👍</h2>
        </div>

        <div class="image-gallery" aria-label="Galería de imágenes del inicio">
            <a
                href="https://hotmart.com/media/2024/02/shutterstock_1854622273.jpg"
                class="image-box tall"
                style="background-image: url('https://hotmart.com/media/2024/02/shutterstock_1854622273.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
            >
            </a>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnTKNsBdfXt1_8LUeH3uNgO8porfgvrhURBkJ_I-ISw&s=10" class="image-box"
                style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnTKNsBdfXt1_8LUeH3uNgO8porfgvrhURBkJ_I-ISw&s=10'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            </a>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSratpKwDC7XyrDYRFKs8aDoOtwwLAGRuDBSDEzQACkaw&s=10" class="image-box"
                style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSratpKwDC7XyrDYRFKs8aDoOtwwLAGRuDBSDEzQACkaw&s=10'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            </a>
            <a href="#https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDtyy_ksB0Uw9GQQf_uNZViwHPHpAJZQT-r1mOyxa6w&s=10" class="image-box"
                style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDtyy_ksB0Uw9GQQf_uNZViwHPHpAJZQT-r1mOyxa6w&s=10'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            </a>
            <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQep_ahvNTeduT3lr2hWsuKC74uTm9iWEUT8blRFXdAVg&s=10" class="image-box wide"
                style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQep_ahvNTeduT3lr2hWsuKC74uTm9iWEUT8blRFXdAVg&s=10'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            </a>
        </div>
    </section>
    <section class="intro-courses">
        <div class="intro-header">
            <h2>Explora nuestros cursos</h2>
            <p>Descubre una variedad de cursos gratuitos diseñados para mejorar tus habilidades y conocimientos. Aprende a tu propio ritmo y accede a contenido de calidad en cualquier momento.</p>
        </div>

        <section class="courses-grid" aria-label="Cursos disponibles">
        <article v-for="course in topCursos" :key="course.id" class="course-card">
                <img class="course-image" :src="course.image" :alt="`Imagen del curso ${course.title}`">
                <div class="course-card-topline">
                    <span class="course-category">{{ course.description.trim() }}</span>
                    <span class="course-number">{{ String(course.id).padStart(2, '0') }}</span>
                </div>
                <h2>{{ course.title }}</h2>
                <div class="course-card-footer">
                    <RouterLink :to="`/cursos/${course.id}`" class="mas">Ver más</RouterLink>
                </div>
            </article>
        </section>
        <div class="ver-todo">
                <RouterLink to="/cursos" class="hero-cta">Ver todos los cursos</RouterLink>
        </div>
    </section>
    <section class="section-certificados" id="certificados">
        <div class="certificados-content">
            <div class="certificado-texto">
                <h2>Certificados de finalización</h2>
                <p>Al completar nuestros cursos, recibirás un certificado de finalización que puedes compartir en tu currículum o en tus redes sociales. Demuestra tus habilidades y conocimientos adquiridos.</p>
            </div>

            <div class="certificado-card">
                <img :src="imgCertificado" alt="Certificado de finalización" class="certificado-image">
            </div>
        </div>
    </section>
    <section class="casos-exito" id="casos">
        <div class="casos-content">
            <h2>Casos de éxito</h2>
            <p>Conoce a algunos de nuestros estudiantes que han alcanzado el éxito gracias a nuestros cursos. Inspírate con sus historias y descubre cómo puedes lograr tus metas.</p>
            <div class="casos-grid">
                <article v-for="caso in successStories" :key="caso.id" class="caso-card">
                    <div class="caso-identidad">
                        <img v-if="caso.image" :src="caso.image" :alt="caso.name" class="caso-image">
                        <div class="caso-persona">
                            <h3>{{ caso.name }}</h3>
                            <p>{{ caso.role }}</p>
                        </div>
                    </div>
                    <span class="caso-category">{{ caso.category }}</span>
                    <blockquote>{{ caso.testimonial }}</blockquote>
                    <p class="caso-curso"><strong>Curso:</strong> {{ caso.course }}</p>
                </article>
            </div>
        </div>
    </section>
    <section class="preguntas-frecuentes" id="preguntas-frecuentes">
        <div class="preguntas-content">
            <h2>Preguntas frecuentes</h2>
            <p class="preguntas-intro">Resuelve tus dudas sobre nuestros cursos y el proceso de inscripción.</p>
            <div class="preguntas-lista">
                <details v-for="item in preguntasFrecuentes" :key="item.pregunta" class="pregunta-item">
                    <summary>{{ item.pregunta }}</summary>
                    <p>{{ item.respuesta }}</p>
                </details>
            </div>
        </div>
    </section>
</div>
</template>

<style scoped>

    .hero {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        gap: 2rem;
        padding: 3rem 5vw;
        background-color: #ffffffe3;
    }

    .hero-content {
        max-width: 600px;
        text-align: left;
    }

    .hero-title {
        font-size: clamp(2.2rem, 4vw, 3.5rem);
        margin-bottom: 1rem;
        color: #0f172a;
    }

    .hero-subtitle {
        font-size: 1.15rem;
        margin-bottom: 2rem;
        color: #475569;
        line-height: 1.7;
    }

    .hero-cta {
        display: inline-block;
        padding: 0.8rem 1.5rem;
        background-color: #f20000;
        color: #fff;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 8px 18px rgba(40, 127, 134, 0.2);
        
    }

    .hero-cta:hover {
        background-color: #c70101;
    }

    .image-gallery {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 1fr));
        gap: 1rem;
        width: min(100%, 540px);
        justify-self: center;
    }

    .image-box {
        position: relative;
        display: flex;
        align-items: end;
        justify-content: center;
        min-height: 180px;
        border-radius: 18px;
        overflow: hidden;
        background: linear-gradient(135deg, #dfeaf1, #cfe0ea);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 1px solid #dbe6ee;
        color: #0f172a;
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .image-box span {
        position: relative;
        z-index: 1;
        margin-bottom: 1rem;
        background: rgba(255, 255, 255, 0.7);
        padding: 0.4rem 0.7rem;
        border-radius: 999px;
    }

    .image-box:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 25px rgba(15, 23, 42, 0.12);
    }

    .image-box.tall {
        min-height: 240px;
    }

    .image-box.wide {
        grid-column: span 2;
        min-height: 160px;
    }

    .intro-courses {
        padding: 3rem 5vw 4rem;
        background: #f9fafb;
    }

    .intro-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .intro-header h2 {
        margin: 0 auto 0.75rem;
        color: #0f172a;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        max-width: 760px;
    }

    .intro-header p {
        margin: 0 auto 1.5rem;
        color: #475569;
        line-height: 1.7;
        max-width: 760px;
    }

    .courses-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
        align-items: stretch;
        margin-bottom: 2rem;
    }

    .course-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        border: 1px solid #dce5e3;
        border-radius: 18px;
        background: #fff;
        box-shadow: 0px 12px 24px rgba(15, 23, 42, 0.06);
        transition: transform 180ms ease, box-shadow 180ms ease;
    }

    .course-card:hover {
        transform: translateY(-4px);
        box-shadow: 0px 16px 30px rgba(15, 23, 42, 0.1);
    }

    .course-image {
        width: 100%;
        height: 190px;
        object-fit: cover;
        display: block;
    }

    .course-card-topline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin: 1rem 1rem 0.5rem;
    }

    .course-category {
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        background: #eef9f9;
        color: #0f766e;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .course-number {
        color: #64748b;
        font-size: 0.8rem;
        font-weight: 700;
    }

    .course-card h2 {
        margin: 0 1rem 1rem;
        color: #0f172a;
        font-size: 1.1rem;
        line-height: 1.5;
        min-height: 3.3em;
    }

    .course-card-footer {
        margin-top: auto;
        padding: 0 1rem 1rem;
    }

    .mas {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem;
        border: 1px solid #478e8a;
        border-radius: 4px;
        background-color: transparent;
        color: #478e8a;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
    }

    .intro-header .hero-cta {
        display: inline-block;
        margin: 0 auto;
    }


    .mas:hover {
        background-color: #478e8a;
        color: #fff;
    }

    .ver-todo {
        text-align: center;
        margin-top: 1.5rem;
        justify-content: center;
        align-items: center;
    }

    .section-certificados {
        padding: 3rem 5vw;
        background: #ffffff;
        scroll-margin-top: 85px;
    }

    .certificados-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        align-items: center;
        gap: 2rem;
    }

    .certificado-texto {
        text-align: left;
    }

    .section-certificados h2 {
        margin-bottom: 1rem;
        color: #0f172a;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
    }

    .section-certificados p {
        margin: 0;
        color: #475569;
        line-height: 1.7;
        max-width: 760px;
    }

    .certificado-card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 320px;
        padding: 1rem;
        border-radius: 24px;
        background: linear-gradient(135deg, #f5f9ff, #eefcfb);
        border: 1px solid #dfeaf4;
        box-shadow: 0 20px 35px rgba(15, 23, 42, 0.08);
    }

    .certificado-image {
        width: 100%;
        max-width: 520px;
        display: block;
        border-radius: 18px;
        object-fit: cover;
    }

    .casos-exito {
        padding: 3rem 5vw;
        background: #f9fafb;
        scroll-margin-top: 85px;
    }

    .casos-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .casos-content > h2 {
        margin: 0 0 0.75rem;
        color: #0f172a;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
    }

    .casos-content > p {
        max-width: 760px;
        margin: 0 auto 2rem;
        color: #475569;
        line-height: 1.7;
    }

    .casos-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        text-align: left;
    }

    .caso-card {
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 1.5rem;
        border: 1px solid #dce5e3;
        border-radius: 30px;
        background: #fff;
        box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
    }

    .caso-identidad {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        margin-bottom: 1rem;
    }

    .caso-avatar,
    .caso-image {
        flex: 0 0 52px;
        width: 52px;
        height: 52px;
        border-radius: 50%;
    }

    .caso-avatar {
        display: grid;
        place-items: center;
        background: #e4f2f2;
        color: #286c68;
        font-weight: 700;
    }

    .caso-image {
        object-fit: cover;
    }

    .caso-persona {
        min-width: 0;
    }

    .caso-persona h3 {
        margin: 0 0 0.25rem;
        color: #17313d;
        font-size: 1rem;
    }

    .caso-persona p {
        margin: 0;
        color: #64748b;
        font-size: 0.85rem;
        line-height: 1.4;
    }

    .caso-category {
        align-self: flex-start;
        margin-bottom: 0.75rem;
        padding: 0.3rem 0.55rem;
        border-radius: 4px;
        background: #eef6f5;
        color: #286c68;
        font-size: 0.75rem;
        font-weight: 700;
    }

    .caso-card blockquote {
        flex: 1;
        margin: 0 0 1rem;
        color: #334155;
        line-height: 1.65;
    }

    .caso-curso {
        margin: 0;
        padding-top: 0.85rem;
        border-top: 1px solid #e2e8f0;
        color: #475569;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .preguntas-frecuentes {
        padding: 3.5rem 5vw;
        background: #fff;
        scroll-margin-top: 85px;
    }

    .preguntas-content {
        max-width: 900px;
        margin: 0 auto;
    }

    .preguntas-content h2 {
        margin: 0 0 0.6rem;
        color: #0f172a;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        text-align: center;
    }

    .preguntas-intro {
        margin: 0 auto 2rem;
        color: #475569;
        line-height: 1.7;
        text-align: center;
    }

    .preguntas-lista {
        border-top: 1px solid #dce5e3;
    }

    .pregunta-item {
        border-bottom: 1px solid #dce5e3;
    }

    .pregunta-item summary {
        padding: 1.1rem 0.25rem;
        color: #17313d;
        font-weight: 600;
        line-height: 1.5;
        cursor: pointer;
    }

    .pregunta-item summary::marker {
        color: #478e8a;
    }

    .pregunta-item p {
        margin: 0;
        padding: 0 0.25rem 1.1rem;
        color: #475569;
        line-height: 1.7;
    }

    @media (max-width: 900px) {
        .courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .certificados-content {
            grid-template-columns: 1fr;
        }

        .certificado-texto {
            text-align: center;
        }

        .casos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 800px) {
        .hero {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .hero-content {
            text-align: center;
            max-width: 100%;
        }

        .image-gallery {
            width: 100%;
        }

        .courses-grid {
            grid-template-columns: 1fr;
        }

        .casos-grid {
            grid-template-columns: 1fr;
        }
    }
</style>