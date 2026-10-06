import {createRouter, createWebHistory} from 'vue-router'
import Cursos from '@/components/Cursos.vue'
import InCursos from '@/components/InCursos.vue'
import Inicio from '@/components/Inicio.vue'
import FormularioPadre from '@/components/FormularioPadre.vue'
import ContCursos from '@/components/ContCursos.vue'
import SeguridadPriv from '@/components/SeguridadPriv.vue'

const routes = [
    { path: '/cursos', name:'Cursos', component: Cursos },
    { path: '/cursos/:id', name: 'CursoDetalle', component: InCursos },
    { path: '/', name:'Inicio', component: Inicio },
    { path: '/formulario/:id', name: 'Formulario', component: FormularioPadre },
    { path: '/contenido/:id', name: 'Contenido', component: ContCursos },
    { path: '/seguridad', name: 'SeguridadPriv', component: SeguridadPriv }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router