<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { introducionCursos } from '@/constants/IntroducionCursos';

const route = useRoute();
const course = computed(() =>
	introducionCursos.find(item => item.id === Number(route.params.id))
);
</script>

<template>
	<main v-if="course" class="course-page">
        <RouterLink class="back-link" to="/cursos">Volver a cursos</RouterLink>
		<section class="course-showcase">
			<div class="course-copy">
				<h1>{{ course.title }}</h1>
				<p class="course-summary">Curso gratuito</p>
				<p class="course-information">{{ course.description }}</p>
				<div class="course-tags">
					<span>{{ course.category }}</span>
					<span>Online</span>
				</div>
			</div>

			<aside class="course-card">
				<img :src="course.image || course.image" :alt="`Imagen del curso ${course.title}`">
				<div class="course-card-body">
					<ul class="course-facts">
						<li>
							<span class="fact-icon" aria-hidden="true">◷</span>
							<span>{{ course.duration }}</span>
						</li>
						<li>
							<span class="fact-icon" aria-hidden="true">文</span>
							<span>{{ course.lenguage }}</span>
						</li>
						<li>
							<span class="fact-icon" aria-hidden="true">✦</span>
							<span>{{ course.certification }}</span>
						</li>
					</ul>
					<RouterLink
						class="course-cta"
						:to="{ name: 'Formulario', params: { id: course.id } }"
					>Acceder al curso</RouterLink>
				</div>
			</aside>
		</section>
        <section class="course-content">
			<h2>Información general del curso</h2>
			<article class="image2">
				<img :src="course.image2 || course.image" :alt="`Imagen del curso ${course.title}`">
				<div class="image2-copy">
					<h3>Sobre el curso</h3>
					<p>{{ course.information || course.description }}</p>
				</div>
			</article>
        </section>
	</main>

	<main v-else class="course-not-found">
		<h1>Curso no encontrado</h1>
		<p>No hay información registrada para el ID {{ route.params.id }}.</p>
		<RouterLink class="back-link" to="/cursos">Volver a cursos</RouterLink>
	</main>
</template>

<style scoped>
	.course-page,
	.course-not-found {
		width: min(1440px, 100%);
		margin: 0 auto;
		padding: 2rem 3rem 4rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.5rem;
		color: #478e8a;
		text-decoration: none;
	}

    .back-link:hover{
        color:#171d1d;
        background-color: transparent;
        font-weight: 600;
    }

	.course-showcase {
		position: relative;
		isolation: isolate;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
		align-items: center;
		gap: clamp(2rem, 5vw, 5rem);
		padding: 3rem 4%;
	}

	.course-showcase::before {
		position: absolute;
		inset: 2rem 0;
		z-index: -1;
		border-radius: 32px;
		background: #e8f7f8;
		content: '';
	}

	.course-copy {
		padding: 2rem 0;
	}

	h1 {
		color: #171d1d;
		font-size: 2.5rem;
		line-height: 1.2;
        font-weight: 600;
	}

	.course-summary {
		margin-top: 1rem;
		color: #287f86;
		font-size: 1.2rem;
	}

	.course-information {
		margin-top: 0.75rem;
		color: #263b3b;
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.course-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-top: 1.25rem;
	}

	.course-tags span {
		padding: 0.35rem 0.8rem;
		border: 1px solid #b5c8c9;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.8);
		color: #263b3b;
		font-size: 0.9rem;
	}

	.course-card {
		align-self: stretch;
		margin: -1rem 0;
		overflow: hidden;
		border: 1px solid #b7e8ea;
		border-radius: 18px;
		background: #fff;
		box-shadow: 0 8px 24px rgba(38, 59, 59, 0.12);
	}

	.course-card img {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	.course-card-body {
		padding: 1rem 1.25rem 1.25rem;
	}

	.course-facts {
		padding: 0;
		list-style: none;
	}

	.course-facts li {
		display: grid;
		grid-template-columns: 28px minmax(0, 1fr);
		align-items: start;
		gap: 0.75rem;
		padding: 0.8rem 0;
		color: #202727;
		font-weight: 600;
		line-height: 1.45;
	}

	.course-facts li + li {
		border-top: 1px solid #edf1f1;
	}

	.fact-icon {
		color: #287f86;
		font-size: 1.2rem;
		font-weight: 400;
		text-align: center;
	}

	.course-cta {
		display: block;
		margin-top: 1rem;
		padding: 0.9rem 1rem;
		border-radius: 999px;
		background: #e10b0b;
		color: #fff;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		transition: background-color 160ms ease;
	}

	.course-cta:hover {
		background: #bd0909;
	}

	.course-content {
		margin: 2rem 1rem 0;
	}

	.course-content > h2 {
		margin-bottom: 1rem;
		color: #171d1d;
		font-size: 1.5rem;
	}

	.image2 {
		display: grid;
		grid-template-columns: minmax(220px, 32%) minmax(0, 1fr);
		align-items: center;
		gap: 1.5rem;
		padding: 1.25rem;
		border: 1px solid #dce5e3;
		border-radius: 12px;
		background: #fff;
		box-shadow: 0 4px 14px rgba(38, 59, 59, 0.08);
	}

	.image2 img {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 3;
		border-radius: 8px;
		object-fit: cover;
	}

	.image2-copy h3 {
		margin-bottom: 0.75rem;
		color: #263b3b;
		font-size: 1.2rem;
	}

	.image2-copy p {
		color: #647474;
		line-height: 1.7;
	}

	.course-not-found h1 {
		font-size: 2rem;
	}

	.course-not-found p {
		margin: 1rem 0;
	}

	@media (max-width: 700px) {
		.course-page,
		.course-not-found {
			padding: 1rem;
		}

		.course-showcase {
			grid-template-columns: 1fr;
			gap: 1rem;
			padding: 1rem 0;
		}

		.course-showcase::before {
			inset: 0;
			border-radius: 20px;
		}

		.course-copy {
			padding: 1.5rem;
		}

		.course-card {
			margin: 0 0.75rem;
		}

		.course-content {
			margin: 1.5rem 0 0;
		}

		.image2 {
			grid-template-columns: 1fr;
			gap: 1rem;
			padding: 1rem;
		}

		.course-facts li {
			padding: 0.65rem 0;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>