const html = document.querySelector('html');
const check = document.querySelector('#checkbox');

check.addEventListener('click', function(){
    html.classList.toggle('dark')
});