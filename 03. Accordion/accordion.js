function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let textElement = document.getElementById('extra');


    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More';

    textElement.style.display = textElement.style.display === 'block' ? 'none' : 'block';
}