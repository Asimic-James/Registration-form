const button = document.getElementsByClassName('btn');

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
}
button.addEventListener('click', toggleTheme);