<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	courseId: number;
	courseTitle: string;
    courseImage: string;
}>();

const emit = defineEmits<{
	inscribir: [datos: {
		courseId: number;
		courseTitle: string;
		fullName: string;
		email: string;
	}];
}>();

const fullName = ref('');
const email = ref('');

function enviarInscripcion() {
	emit('inscribir', {
		courseId: props.courseId,
		courseTitle: props.courseTitle,
		fullName: fullName.value.trim(),
		email: email.value.trim(),
	});
}
</script>

<template>
	<section class="registration-card" aria-labelledby="registration-title">
		<p class="registration-kicker">INSCRIPCIÓN</p>
		<h1 id="registration-title">{{ courseTitle }}</h1>
		<div class="course-image-frame">
			<img :src="courseImage" :alt="`Imagen del curso ${courseTitle}`">
		</div>
        <br>
		<p class="course-id">¡Te damos la bienvenida!</p>

		<form class="registration-form" @submit.prevent="enviarInscripcion">
			<label for="full-name">Nombre completo</label>
			<input
				id="full-name"
				v-model.trim="fullName"
				type="text"
				autocomplete="name"
				maxlength="100"
				required
			>

			<label for="email">Correo electrónico</label>
			<input
				id="email"
				v-model.trim="email"
				type="email"
				autocomplete="email"
				maxlength="254"
				required
			>

			<button type="submit">Inscribirme y guardar mi proceso</button>
		</form>
	</section>
</template>

<style scoped>
	.registration-card {
		padding: 2rem;
		border: 1px solid #dce5e3;
		border-radius: 12px;
		background: #fff;
		box-shadow: 0 6px 20px rgba(38, 59, 59, 0.08);
	}

	.registration-kicker {
		margin-bottom: 0.4rem;
		color: #287f86;
		font-size: 0.75rem;
		font-weight: 700;
	}

	h1 {
		color: #171d1d;
		font-size: 1.75rem;
        justify-content: center;
        display: flex;
        font-weight: 600;
	}

	.course-image-frame {
		width: min(100%, 420px);
		aspect-ratio: 2 / 1;
		margin-top: 1rem;
		margin-inline: auto;
		overflow: hidden;
		border-radius: 8px;
		background: #e8f7f8;
	}

	.course-image-frame img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.course-name {
		margin-top: 0.4rem;
		color: #647474;
	}

	.course-id {
		margin-top: 0.25rem;
		color: #000000;
		font-size: 0.85rem;
        display: flex;
        justify-content: center;
        font-weight: 600;
        font-size: 1.1rem;
	}

	.registration-form {
		display: grid;
		gap: 0.65rem;
		margin-top: 1.5rem;
	}

	.registration-form label {
		margin-top: 0.5rem;
		color: #263b3b;
		font-weight: 600;
	}

	.registration-form input {
		width: 100%;
		min-height: 44px;
		padding: 0.65rem 0.75rem;
		border: 1px solid #bdcecc;
		border-radius: 4px;
		background: #fff;
		color: #202727;
		font: inherit;
	}

	.registration-form input:focus-visible {
		outline: 2px solid #287f86;
		outline-offset: 2px;
	}

	.registration-form button {
		min-height: 46px;
		margin-top: 0.75rem;
		padding: 0.7rem 1rem;
		border: 0;
		border-radius: 50px;
		background: #f20000;
		color: #fff;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}

	.registration-form button:hover {
		background: #c70101;
	}

	@media (max-width: 600px) {
		.registration-card {
			padding: 1.25rem;
		}
	}
</style>