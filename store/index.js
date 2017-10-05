// import axios from '~/plugins/axios'

export const state = () => ({
  techSkills: [
    { prop: 'intro', title: 'Introducción a ciencias de la computación', description: 'Introducción al mundo del desarrollo web, empezando por la programación mediante JavaScript. Entender los principales actores en el desarrollo web, usar un lenguaje de programación (JS) Abstraer conceptos reales y llevarlos a programación. Desarrollar habilidad lógica para resolución de problemas.' },
    { prop: 'front', title: 'Becoming a front end engineer', description: 'Obtener conocimientos básicos de la *arquitectura web*. Comprensión de cuáles son las herramientas disponibles para el desarrollo web y la importancia de tener una ambiente de desarrollo definido y personalizado. Conocimiento de HTML, familiarización de la sintaxis básica del mismo y compresión de la relación que tiene con JS.' },
    { prop: 'prototyping', title: 'Prototyping', description: 'Profundización en CSS a través del desarrollo de proyectos de complejidad gradual, sin dejar de lado la interacción y lógica con JavaScript, agregando Github como plataforma para trabajo colaborativo.' },
    { prop: 'prototyping_2', title: 'Prototyping II', description: 'Manejo de CSS frameworks, responsive design, e interacción con APIs del navegador a través de JavaScript.' },
    { prop: 'js_next_steps', title: 'JS next steps', description: 'Uso de librería de JavaScript para recorrido y manipulación del DOM además de peticiones asíncronas (jQuery). Protocolo HTTP, AJAX, JSON y APIs. Por último, promises como feature para evitar el callback hell.' }
  ],
  lifeSkills: [
    { prop: 'attendance', title: 'asistencia y puntualidad', description: 'Introducción al mundo del desarrollo web, empezando por la programación mediante JavaScript. Entender los principales actores en el desarrollo web, usar un lenguaje de programación (JS) Abstraer conceptos reales y llevarlos a programación. Desarrollar habilidad lógica para resolución de problemas.' },
    { prop: 'comunication', title: 'habilidades de comunicación', description: 'Obtener conocimientos básicos de la *arquitectura web*. Comprensión de cuáles son las herramientas disponibles para el desarrollo web y la importancia de tener una ambiente de desarrollo definido y personalizado. Conocimiento de HTML, familiarización de la sintaxis básica del mismo y compresión de la relación que tiene con JS.' },
    { prop: 'excellency', title: 'excelencia', description: 'Profundización en CSS a través del desarrollo de proyectos de complejidad gradual, sin dejar de lado la interacción y lógica con JavaScript, agregando Github como plataforma para trabajo colaborativo.' },
    { prop: 'stress', title: 'flexibilidad y adaptabilidad', description: 'Manejo de CSS frameworks, responsive design, e interacción con APIs del navegador a través de JavaScript.' },
    { prop: 'teamwork', title: 'trabajo en equipo', description: 'Uso de librería de JavaScript para recorrido y manipulación del DOM además de peticiones asíncronas (jQuery). Protocolo HTTP, AJAX, JSON y APIs. Por último, promises como feature para evitar el callback hell.' }
  ],
  averages: {
    tech: 0.79,
    life: 0.86,
    techEmployable: 0.70,
    lifeEmployable: 0.75
  },
  english: {
    'elemental': 'elemental',
    'basic': 'básico',
    'intermediate': 'intermedio',
    'advanced': 'avanzado'
  }
})

export const actions = {
  async nuxtServerInit ({commit}, { req, res }) {
    commit('session/SET_CSRF_TOKEN', req.keystone.security.csrf.getToken(req, res))

    if (req.session && req.user) {
      commit('session/SET_USER', req.user)
    }
  }
}
