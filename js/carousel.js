/* Script para crear y configurar el carrusel con Splide js */
window.addEventListener("load", () => {
    const carouselElement = document.querySelector('#images-carousel');
    imagesLoaded(carouselElement, () => {
        new Splide(carouselElement, {
            type: 'loop',
            pagination: true,
            drag: true,
            speed: 800,
            gap: 5,
            autoplay: true,
            interval: 2500,
            perPage: 1,
            perMove: 1,
        }).mount();
    });
});

