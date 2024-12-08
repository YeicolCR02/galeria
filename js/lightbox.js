document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const galleryImages = document.querySelectorAll('.gallery img');

    // Función para abrir el lightbox
    function openLightbox(imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
        // Forzar un reflow para que la transición funcione
        void lightbox.offsetWidth;
        lightbox.classList.add('active');
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }, 300); // Esperar a que termine la transición
    }

    // Agregar eventos a las imágenes de la galería
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });

    // Cerrar el lightbox al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', closeLightbox);

    // Cerrar el lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Cerrar el lightbox con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});