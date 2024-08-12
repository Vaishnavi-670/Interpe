document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.input input');
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            
            if (buttonText === '=') {
                try {
                    inputField.value = eval(inputField.value);
                } catch (e) {
                    inputField.value = 'Error';
                }
            } else if (buttonText === 'C') {
                inputField.value = '';
            } else {
                inputField.value += buttonText;
            }
        });
    });
});