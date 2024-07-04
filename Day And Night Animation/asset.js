let day = true;
const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', function () {
    if (day) {
        container.classList.remove('day');
        container.classList.add('night');
        button.textContent = 'Light Mode';
        day = false;
    } else {
        container.classList.remove('night');
        container.classList.add('day');
        button.textContent = 'Night Mode';
        day = true;
    }
});