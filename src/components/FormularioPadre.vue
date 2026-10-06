<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { introducionCursos } from '@/constants/IntroducionCursos';
import FormularioHijo from './FormularioHijo.vue';

interface DatosInscripcion {
	courseId: number;
	courseTitle: string;
	fullName: string;
	email: string;
}

const route = useRoute();
const router = useRouter();
const course = computed(() =>
	introducionCursos.find(item => item.id === Number(route.params.id))
);

function registrarInscripcion(datos: DatosInscripcion) {
	router.push({ name: 'Contenido', params: { id: datos.courseId } });
}
</script>

<template>
	<main v-if="course" class="registration-page">
		<RouterLink class="back-link" :to="{ name: 'CursoDetalle', params: { id: course.id } }">
			Volver al curso
		</RouterLink>
		<FormularioHijo
			:course-id="course.id"
			:course-title="course.title"
            :course-image="course.image"
			@inscribir="registrarInscripcion"
		/>
	</main>

	<main v-else class="registration-page">
		<h1>Curso no encontrado</h1>
		<p>No hay información registrada para el ID {{ route.params.id }}.</p>
		<RouterLink class="back-link" to="/cursos">Volver a cursos</RouterLink>
	</main>
</template>

<style scoped>
	.registration-page {
		width: min(760px, 100%);
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

	@media (max-width: 600px) {
		.registration-page {
			padding: 1rem;
		}
	}
</style>