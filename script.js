var imagens = document.querySelectorAll('.img');

// Adiciona um ouvinte de evento de clique a cada imagem
imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        // Adiciona a animação quando a imagem é clicada
        imagem.style.animation = 'vire 4s linear';
            setTimeout(function() {
        imagem.style.animation = 'none';
    }, 5000);
    });

});

