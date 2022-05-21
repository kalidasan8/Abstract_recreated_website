const toggleButton = document.getElementsByClassName('toggle-button')[0];
const buttons = document.getElementsByClassName('button')[0];

toggleButton.addEventListener('click', () => { 
    buttons.classList.toggle('active');
})