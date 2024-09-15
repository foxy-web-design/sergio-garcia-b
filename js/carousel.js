/* Script para crear y configurar el carrusel con Splide js */

window.addEventListener("load", () => {
    new Splide('#images-carousel', {
        type: 'loop',
        pagination: true,
        drag: true,
        speed: 800,
        gap: 10,
        autoplay: true,
        perPage: 1,
        perMove: 1,
    }).mount();
});