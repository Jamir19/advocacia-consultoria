// Função de animação ao rolar a página
window.addEventListener('scroll', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('show');
        }
    });
});
