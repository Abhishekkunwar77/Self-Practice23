let display = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    if (currentInput === '' && operator !== '-') return;
    if (currentInput.endsWith(' ')) {
        currentInput = currentInput.slice(0, -3);
    }
    currentInput += ` ${operator} `;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || '0';
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace(/ /g, '')).toString();
        display.innerText = currentInput;
        shouldResetDisplay = true;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});