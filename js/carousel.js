window.addEventListener("load", () => {
    // Crear y configurar el carrusel con Splide.js
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

    // Aplicar los estilos usando JavaScript
    const carousel = document.querySelector('#images-carousel');
    carousel.style.width = '400px';
    carousel.style.height = 'auto';
    carousel.style.margin = '0 auto';
    carousel.style.paddingBottom = '40px';

    const splideTrack = document.querySelector('.splide__track');
    splideTrack.style.borderRadius = '10px';
    splideTrack.style.boxShadow = '-10px 10px 5px rgba(0, 0, 0, 0.5)';

    const slideImages = document.querySelectorAll('.splide__slide img');
    slideImages.forEach(image => {
        image.style.objectFit = 'cover';
        image.style.maxHeight = '100%';
        image.style.maxWidth = '100%';
        image.style.borderRadius = '10px';
    });
});
