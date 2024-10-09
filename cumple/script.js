// Evento de clic en la caja de regalo
document.querySelector('.caja-regalo').addEventListener('click', function() {
    // Mostrar la sorpresa
    document.querySelector('.sorpresa').style.display = 'block';

    // Cambiar el fondo del cuerpo a la animación GIF
    document.body.classList.add('fondo-animado');
    
    // Ocultar la caja de regalo
    this.style.display = 'none'; // La caja desaparece al hacer clic en ella
});
