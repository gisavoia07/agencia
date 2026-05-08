let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide img");

function showSlide(index) {
    // Remove a classe 'active' da imagem atual
    slides[currentSlide].classList.remove("active");
    
    // Calcula o próximo índice (com loop)
    currentSlide = (index + slides.length) % slides.length;
    
    // Adiciona a classe 'active' na nova imagem
    slides[currentSlide].classList.add("active");
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Opcional: Carrossel automático a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);