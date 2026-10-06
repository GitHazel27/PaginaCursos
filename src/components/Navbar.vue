<script setup lang="ts">
    import { ref } from 'vue';
    import { cardsCursos } from '@/constants/CardsCursos';

    const showExplorar = ref(false);
    const showCursos = ref(false);
    const showCertificados = ref(false);
    const showCasos = ref(false);
    const topCursos = cardsCursos.slice(0, 5);
</script>

<template>
  <nav class="navbar">
    <div class="logo">
        <RouterLink to="/" class="home-link">SkillPulse 📖</RouterLink>
    </div>

    <div class="dropdown">
      <button
        type="button"
        class="dropdown-title"
        :aria-expanded="showExplorar"
        @click="showExplorar = !showExplorar; showCursos = false"
      >Explorar</button>
      <div v-if="showExplorar" class="dropdown-content">
        <div class="dropdown-menu">
          <button
            type="button"
            class="dropdown-cursos"
            :aria-expanded="showCursos"
            @click="showCursos = !showCursos; showCasos = false"
          >Cursos 🡢</button>
          <a
            class="dropdown-cursos"
            href="/#certificados"
            @click="showExplorar = false; showCursos = false; showCasos = false"
          >Certificados</a>
          <a
            class="dropdown-cursos"
            href="/#casos"
            @click="showExplorar = false; showCursos = false; showCertificados = false"
          >Casos de éxito</a>
          <a
            class="dropdown-cursos"
            href="/#preguntas-frecuentes"
            @click="showExplorar = false; showCursos = false; showCasos = false; showCertificados = false"
          >Preguntas frecuentes</a>
        </div>
        <section v-if="showCursos" class="dropdown-options">
          <RouterLink to="/cursos" class="ver-todo" 
          @click="showExplorar = false">Ver todos los cursos</RouterLink>
          <h2 class="top">Los más populares</h2>
          <div class="courses-list">
            <RouterLink
              v-for="course in topCursos"
              :key="course.id"
              :to="`/cursos/${course.id}`"
              class="course-link"
              @click="showExplorar = false; showCursos = false; showCasos = false; showCertificados = false"
            >
              {{ course.title }}
            </RouterLink>
          </div>
        </section>
      </div>
    </div>
  </nav>
</template>

<style scoped>

    nav.navbar {
      --navbar-height: 85px;
        position: sticky;
        top: 0;
        z-index: 1000;
        display: flex;
        width: 100%;
        height: var(--navbar-height);
        justify-content: flex-start;
        gap: 2rem;
        align-items: center;
        padding: 1rem;
        background-color: #fff;
        font-family: instagram, sans-serif;
        color: #df0000;
        border-bottom: 1px solid #86d8e2;
    }

    .navbar .logo .home-link {
        font-size: 20px;
        margin: 0;
        color: #f20000;
        text-decoration: none;
    }

    .navbar .logo .home-link:hover {
      background-color: transparent;
      transition: none;
    }

    .dropdown {
        position: relative;
        justify-content: center;
    }

    .dropdown-title {
      padding: 0;
      border: 0;
      background: transparent;
      font: inherit;
        cursor: pointer;
        color: #333;
    }

    .dropdown-title:hover,
    .dropdown-title[aria-expanded="true"] {
        color: #478e8a;
        font-weight: 600;
    }

    .dropdown-content {
        position: fixed;
        top: var(--navbar-height);
        left: 0;
        width: 100vw;
        min-height: 250px;
        display: grid;
        grid-template-columns: minmax(180px, 24%) minmax(0, 1fr);
        background-color: #fff;
        color: #333;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-menu {
      padding: 1.5rem;
      background-color: #f5f8f8;
      border-right: 1px solid #d9e4e4;
    }

    .dropdown-cursos {
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 0.75rem 1rem;
      border: 0;
      background: transparent;
      color: #333;
      font: inherit;
      text-align: left;
      text-decoration: none;
      line-height: 1.4;
      cursor: pointer;
    }

    .dropdown-cursos:focus-visible {
      outline: 2px solid #478e8a;
      outline-offset: -2px;
    }

    .dropdown-cursos:hover,
    .dropdown-cursos[aria-expanded="true"] {
      background-color: #e4f2f2;
      border-radius: 4px;
    }

    .dropdown-options {
      min-width: 0;
      padding: 1.5rem 2rem;
    }

    .dropdown-options h2 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .courses-list {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .course-link {
      display: block;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      color: #17313d;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .course-link:hover {
      background: #eaf7f7;
    }

    .courses-placeholder {
      min-height: 140px;
      display: grid;
      place-items: center;
      padding: 1.5rem;
      border: 1px dashed #b8caca;
      color: #667575;
      text-align: center;
    }

    .ver-todo {
      display: block;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      color: #050505;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.2s ease;
    }

    .ver-todo:hover {
      background: #eaf7f7;
    }

    .top {
      margin-top: 0rem;
      font-size: 0.9rem;
      color: #478e8a;
      font-weight: 700;
    }

    @media (max-width: 600px) {
      .dropdown-content {
        grid-template-columns: minmax(120px, 35%) minmax(0, 1fr);
      }

      .dropdown-menu,
      .dropdown-options {
        padding: 1rem;
      }
    }
    
</style>