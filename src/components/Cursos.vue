<script setup lang="ts">
import { computed, ref } from 'vue';
import { cardsCursos } from '@/constants/CardsCursos';

const selectedCategory = ref('Todas');
const categories = [...new Set(cardsCursos.map(course => course.description.trim()))];

function filtrarPorCategoria(category: string) {
    if (category === 'Todas') return cardsCursos;

    return cardsCursos.filter(course => course.description.trim() === category);
}

const filteredCourses = computed(() => filtrarPorCategoria(selectedCategory.value));
</script>

<template>
    <main class="courses-page">
        <header class="courses-heading">
            <div>
                <p class="eyebrow">CATÁLOGO DE APRENDIZAJE</p>
                <h1>Cursos</h1>
                <p class="intro">Explora los cursos disponibles y encuentra tu próximo tema.</p>
            </div>
            <div class="catalog-controls">
                <label for="category-filter">Categoría</label>
                <select id="category-filter" v-model="selectedCategory">
                    <option value="Todas">Todas</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
                <span class="course-count">{{ filteredCourses.length }} cursos</span>
            </div>
        </header>

        <section class="courses-grid" aria-label="Cursos disponibles">
            <article v-for="course in filteredCourses" :key="course.id" class="course-card">
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
    </main>
</template>

<style scoped>
    .courses-page {
        width: min(1200px, 100%);
        margin: 0 auto;
        padding: 3rem 2rem;
    }

    .courses-heading {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .eyebrow {
        margin-bottom: 0.5rem;
        color: #478e8a;
        font-size: 0.75rem;
        font-weight: 700;
    }

    h1 {
        color: #263b3b;
        font-size: 2.5rem;
        line-height: 1.15;
    }

    .intro {
        margin-top: 0.5rem;
        color: #647474;
    }

    .course-count {
        flex-shrink: 0;
        padding-bottom: 0.25rem;
        color: #647474;
    }

    .catalog-controls {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #647474;
    }

    .catalog-controls select {
        min-height: 40px;
        padding: 0.4rem 2rem 0.4rem 0.75rem;
        border: 1px solid #cbd8d6;
        border-radius: 4px;
        background: #fff;
        color: #263b3b;
        font: inherit;
    }

    .courses-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
    }

    .course-card {
        min-height: 220px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid #dce5e3;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.311);
        transition: transform 180ms ease, box-shadow 180ms ease;
    }

    @media (hover: hover) {
        .course-card:hover {
            transform: translateY(-4px);
            box-shadow: 0px 8px 18px rgba(38, 59, 59, 0.16);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .course-card {
            transition: none;
        }

        .course-card:hover {
            transform: none;
        }
    }

    .course-image {
        display: block;
        width: 100%;
        aspect-ratio: 2.25 / 1;
        object-fit: cover;
    }

    .course-card-topline,
    .course-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }

    .course-card-topline {
        padding-top: 0.75rem;
    }

    .course-number {
        color: #478e8a;
        font-size: 0.8rem;
        font-weight: 700;
    }

    .course-category {
        color: #647474;
        font-size: 0.85rem;
    }

    .course-card h2 {
        margin: 1rem 0;
        padding: 0 1.5rem;
        color: #263b3b;
        font-size: 1.25rem;
        line-height: 1.35;
        font-family: instagram, sans-serif;
        font-weight: 600;
    }

    .course-card-footer {
        margin-top: auto;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        border-top: 1px solid #e7eceb;
        color: #647474;
        font-size: 0.85rem;
    }

    .course-arrow {
        color: #478e8a;
        font-size: 1.1rem;
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
        text-decoration: none;
    }

    .mas:hover {
        background-color: #478e8a;
        color: #fff;
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

    @media (max-width: 900px) {
        .courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 600px) {
        .courses-page {
            padding: 2rem 1rem;
        }

        .courses-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.75rem;
        }

        .catalog-controls {
            flex-wrap: wrap;
        }

        h1 {
            font-size: 2rem;
        }

        .courses-grid {
            grid-template-columns: 1fr;
    }
    }
</style>