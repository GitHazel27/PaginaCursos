<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { contenidoCursos } from '@/constants/Contenido';

type ModuleKey = 'modulo1' | 'modulo2' | 'modulo3' | 'apoyo';

const route = useRoute();
const courseContent = computed(() =>
    contenidoCursos.find(item => item.id === Number(route.params.id))
);
const modules: { key: ModuleKey; label: string }[] = [
    { key: 'modulo1', label: 'Módulo 1' },
    { key: 'modulo2', label: 'Módulo 2' },
    { key: 'modulo3', label: 'Módulo 3' },
    { key: 'apoyo', label: 'Material de apoyo' },
];
const selectedModule = ref<ModuleKey>('modulo1');
const youtubeEmbedUrl = computed(() => {
    const supportUrl = courseContent.value?.apoyo;
    if (!supportUrl) return '';

    try {
        const url = new URL(supportUrl);
        const host = url.hostname;
        let videoId = '';

        if (host === 'youtu.be' || host.endsWith('.youtu.be')) {
            videoId = url.pathname.split('/').filter(Boolean)[0] ?? '';
        } else if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
            videoId = url.searchParams.get('v')
                ?? url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1]
                ?? '';
        }

        return videoId
            ? `https://www.youtube-nocookie.com/embed/${videoId}`
            : '';
    } catch {
        return '';
    }
});
</script>

<template>
    <main v-if="courseContent" class="content-page">
        <RouterLink class="back-link" :to="{ name: 'CursoDetalle', params: { id: courseContent.id } }">
            Volver a al curso
        </RouterLink>
        <header class="content-heading">
            <p class="content-kicker">CONTENIDO DEL CURSO</p>
            <h1>{{ courseContent.title }}</h1>
        </header>
        <section class="module-layout" aria-label="Contenido del curso">
            <nav class="modules-list" aria-label="Seleccionar módulo">
                <button
                    v-for="module in modules"
                    :key="module.key"
                    type="button"
                    class="module-button"
                    :class="{ 'is-selected': selectedModule === module.key }"
                    :aria-pressed="selectedModule === module.key"
                    @click="selectedModule = module.key"
                >
                    {{ module.label }}
                </button>
            </nav>
            <article
                v-show="selectedModule === 'modulo1'"
                class="module-card"
                v-html="courseContent.modulo1"
            ></article>
            <article
                v-show="selectedModule === 'modulo2'"
                class="module-card"
                v-html="courseContent.modulo2"
            ></article>
            <article
                v-show="selectedModule === 'modulo3'"
                class="module-card"
                v-html="courseContent.modulo3"
            ></article>
            <article v-show="selectedModule === 'apoyo'" class="module-card">
                <h2>Material de apoyo</h2>
                <div v-if="youtubeEmbedUrl" class="video-frame">
                    <iframe
                        :src="youtubeEmbedUrl"
                        :title="`Video de apoyo para ${courseContent.title}`"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
                <p v-else>
                    <a :href="courseContent.apoyo" target="_blank" rel="noopener noreferrer">
                        Abrir material de apoyo
                    </a>
                </p>
            </article>
        </section>
    </main>

    <main v-else class="content-page">
        <h1>Curso no encontrado</h1>
        <p>No hay contenido registrado para el ID {{ route.params.id }}.</p>
        <RouterLink class="back-link" to="/cursos">Volver a cursos</RouterLink>
    </main>
</template>

<style scoped>
    .content-page {
        width: min(1100px, 100%);
        margin: 0 auto;
        padding: 2rem;
    }

    .back-link {
        display: inline-block;
        margin-bottom: 1.25rem;
        color: #287f86;
        text-decoration: none;
    }

    .back-link:hover {
        color:#171d1d;
        background-color: transparent;
        font-weight: 600;
    }

    .content-heading {
        margin-bottom: 2rem;
        padding: 2rem;
        border-radius: 12px;
        background: #e8f7f8;
    }

    .content-kicker {
        margin-bottom: 0.5rem;
        color: #287f86;
        font-size: 0.8rem;
        font-weight: 700;
    }

    .module-layout {
        display: grid;
        grid-template-columns: minmax(180px, 240px) minmax(0, 1fr);
        align-items: start;
        gap: 1.25rem;
    }

    .modules-list {
        display: grid;
        gap: 0.5rem;
        padding: 0.75rem;
        border: 1px solid #dce5e3;
        border-radius: 8px;
        background: #f4f9f9;
    }

    .module-button {
        min-height: 44px;
        padding: 0.65rem 0.85rem;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #263b3b;
        font: inherit;
        text-align: left;
        cursor: pointer;
    }

    .module-button:hover,
    .module-button.is-selected {
        background: #dceff0;
        color: #176c72;
        font-weight: 700;
    }

    .module-card {
        min-height: 320px;
        padding: 1.5rem;
        border: 1px solid #dce5e3;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 6px 20px rgba(38, 59, 59, 0.08);
    }

    .module-card :deep(h3) {
        margin-bottom: 0.75rem;
        color: #263b3b;
        font-size: 1.25rem;
    }

    .module-card :deep(p) {
        color: #647474;
        line-height: 1.7;
    }

    .module-card :deep(ul) {
        margin-top: 0.75rem;
        padding-left: 1.25rem;
        color: #647474;
    }

    .module-card :deep(li + li) {
        margin-top: 0.5rem;
    }

    .video-frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        background: #172020;
    }

    .video-frame iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    @media (max-width: 700px) {
        .content-page {
            padding: 1rem;
        }

        .content-heading,
        .module-card {
            padding: 1.25rem;
        }

        .module-layout {
            grid-template-columns: 1fr;
        }

        .modules-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .module-button {
            padding: 0.6rem;
            text-align: center;
        }
    }
</style>