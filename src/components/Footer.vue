<script setup lang="ts">
const contactos = [
  { label: 'Email', value: 'contacto@skillpulse.com', href: 'mailto:contacto@skillpulse.com' },
  { label: 'WhatsApp', value: '+52 55 1234 5678', href: 'https://wa.me/525512345678' },
  { label: 'Dirección', value: 'CDMX, México', href: '#' },
]

const empresas = ['Google Cloud', 'Microsoft', 'Platzi', 'Coursera', 'LinkedIn Learning']

const privacidad = [
  { label: 'Política de privacidad', href: '/seguridad#politica-privacidad' },
  { label: 'Términos de uso', href: '/seguridad#terminos-uso' },
  { label: 'Seguridad', href: '/seguridad#seguridad-informacion' },
  { label: 'Cookies', href: '/seguridad#politica-cookies' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <div class="brand-tag">SkillPulse</div>
        <h3>Aprende con cursos que impulsan tu futuro.</h3>
        <p>
          Formamos profesionales con experiencia práctica, mentoría continua y contenido actualizado
          para crecer en un mundo digital.
        </p>
      </div>

      <div class="footer-column">
        <h4>Contacto</h4>
        <ul>
          <li v-for="item in contactos" :key="item.label">
            <span>{{ item.label }}</span>
            <a :href="item.href">{{ item.value }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Empresas afiliadas</h4>
        <ul>
          <li v-for="empresa in empresas" :key="empresa">{{ empresa }}</li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Seguridad y privacidad</h4>
        <ul>
          <li v-for="item in privacidad" :key="item.label">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 SkillPulse. Todos los derechos reservados.</p>
      <p>Plataforma segura · datos protegidos · aprendizaje confiable</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #e2e8f0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 1.5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-tag {
  width: fit-content;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(96, 165, 250, 0.18);
  color: #bfdbfe;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-brand h3,
.footer-column h4 {
  margin: 0;
  color: #f8fafc;
}

.footer-brand p,
.footer-column ul,
.footer-column li,
.footer-bottom p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer-column li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.95rem;
}

.footer-column li span {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #93c5fd;
}

.site-footer a {
  color: #dbeafe;
  text-decoration: none;
  padding: 0;
  background: transparent;
  transition: opacity 0.2s ease;
}

.site-footer a:hover {
  opacity: 0.8;
  background: transparent;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem 2rem;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding-top: 2.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>