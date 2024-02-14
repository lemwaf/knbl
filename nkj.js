let retractCounter = 0;
let intervalId;



function moveButton() {
    var button = document.getElementById('no-btn');
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    
    // Aumentar el tamaño del botón "Sí" cada vez que el botón "No" se mueva
    increaseSize();
    
    // Cambiar la imagen central cada vez que el botón "No" se mueva
    changeImage();
}

// Función para aumentar el tamaño del botón "Sí"
function increaseSize() {
    var siButton = document.getElementById('si-btn');
    var currentSize = parseInt(siButton.style.fontSize) || 16;
    siButton.style.fontSize = (currentSize + 1) + 'px';
}

// Función para cambiar la imagen central
function changeImage() {
    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    var imageUrl = imageUrls[randomIndex];
    document.getElementById('imagen').src = imageUrl;
}

// Función para activar el movimiento cuando se pasa el mouse sobre el botón
function startMoving() {
    moveButton();
    // Mover el botón cada segundo
    intervalId = setInterval(moveButton, 1000);
}

// Función para detener el movimiento cuando se quita el mouse del botón
function stopMoving() {
    clearInterval(intervalId);
}

// Asignar eventos de mouse al botón "No"
var noButton = document.getElementById('no-btn');
noButton.addEventListener('mouseenter', startMoving);
noButton.addEventListener('mouseleave', stopMoving);

// Evento de clic para el botón "Sí"
document.getElementById('si-btn').addEventListener('click', function() {
    // Mostrar mensaje cuando se hace clic en el botón "Sí"
    alert('¡Ya era hora bobo!');
});