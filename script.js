// script.js
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let input = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            input = '';
            display.innerText = '0';
            return;
        }

        if (button.id === 'equal') {
            try {
                let result = eval(input);
                display.innerText = result;
                input = result.toString();
            } catch (error) {
                display.innerText = 'Error';
                input = '';
            }
            return;
        }

        input += value;
        display.innerText = input;
    });
});
