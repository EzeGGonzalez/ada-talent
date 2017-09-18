// import axios from '~/plugins/axios'

export const state = () => ({
  techSkills: [
    { title: 'Introducción a ciencias de la computación', description: 'Introducción al mundo del desarrollo web, empezando por la programación mediante JavaScript. Entender los principales actores en el desarrollo web, usar un lenguaje de programación (JS) Abstraer conceptos reales y llevarlos a programación. Desarrollar habilidad lógica para resolución de problemas.' },
    { title: 'Becoming a front end engineer', description: 'Obtener conocimientos básicos de la *arquitectura web*. Comprensión de cuáles son las herramientas disponibles para el desarrollo web y la importancia de tener una ambiente de desarrollo definido y personalizado. Conocimiento de HTML, familiarización de la sintaxis básica del mismo y compresión de la relación que tiene con JS.' },
    { title: 'Prototyping', description: 'Profundización en CSS a través del desarrollo de proyectos de complejidad gradual, sin dejar de lado la interacción y lógica con JavaScript, agregando Github como plataforma para trabajo colaborativo.' },
    { title: 'Prototyping II', description: 'Manejo de CSS frameworks, responsive design, e interacción con APIs del navegador a través de JavaScript.' },
    { title: 'JS next steps', description: 'Uso de librería de JavaScript para recorrido y manipulación del DOM además de peticiones asíncronas (jQuery). Protocolo HTTP, AJAX, JSON y APIs. Por último, promises como feature para evitar el callback hell.' }
  ]
})

// export const actions = {
//   async nuxtServerInit ({ commit }, { req }) {
//     let { data: skills } = await axios.get('/api/tech-skills')
//     console.log(skills)
//   }
// }
