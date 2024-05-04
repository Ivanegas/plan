let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');
let noClickCount = 0;


btnNo.addEventListener('click', () => {
        const image = document.querySelector('#btnYes');
        image.style.width = (parseFloat(window.getComputedStyle(image).width) * 2) + 'px';
        image.style.height = (parseFloat(window.getComputedStyle(image).height) * 2) + 'px';
        noClickCount++;
        if (noClickCount === 5) {
            // Cambiar la imagen y el texto
            document.querySelector('img').src=('gato.jpg');
            document.querySelector('h1').textContent = 'Porfis una cita si?';
            
            // Restablecer el tamaño original del botón "Sí"
            btnYes.style.width = '';
            btnYes.style.height = '';
        }else if(noClickCount === 10){
            document.querySelector('img').src=('perro.jpg');
            document.querySelector('img').style.maxWidth='50%';
            document.querySelector('h1').textContent = 'Solo Millos locas, pero di que si a la cita 😥';
            
            // Restablecer el tamaño original del botón "Sí"
            btnYes.style.width = '';
            btnYes.style.height = '';
        }else if(noClickCount === 15){
            document.querySelector('img').src=('perro2.jpeg');
            document.querySelector('img').style.maxWidth='100%';
            document.querySelector('h1').textContent = 'Pero porque no a la cita 😓';
            
            // Restablecer el tamaño original del botón "Sí"
            btnYes.style.width = '';
            btnYes.style.height = '';
        }
});