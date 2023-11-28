const btn = document.querySelector('.nav-button');
const navIcon = document.querySelector('box-icon');
const list = document.querySelector('.encabezado');

document.addEventListener('click', function(event) {
    if (event.target !== navIcon) {
        list.classList.remove('active');
    }
});

btn.addEventListener('click', function() {
    list.classList.toggle('active');
});




