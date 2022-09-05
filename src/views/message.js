import html from './message.html';
import './message.css';

let elements = [];
let body;

export function show(text) {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement('div');
  temporary.innerHTML = html;
  temporary.getElementsByClassName('js-widget-dialog')[0].textContent = text;

  // append elements to body
  body = document.getElementsByTagName('body')[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }

    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '÷':
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0,
        });
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }

    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
      } else {
        this.previousOperandTextElement.innerText = '';
      }
    }
  }

  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operation]');
  const equalsButton = document.querySelector('[data-equals]');
  const deleteButton = document.querySelector('[data-delete]');
  const allClearButton = document.querySelector('[data-all-clear]');
  const previousOperandTextElement = document.querySelector(
    '[data-previous-operand]'
  );
  const currentOperandTextElement = document.querySelector(
    '[data-current-operand]'
  );

  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  equalsButton.addEventListener('click', (button) => {
    calculator.compute();
    calculator.updateDisplay();
  });

  allClearButton.addEventListener('click', (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });

  deleteButton.addEventListener('click', (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });

  body.addEventListener('click', close);
}

// export function close() {
//   while (elements.length > 0) {
//     elements.pop().remove();
//   }
//   //   body.removeEventListener('click', close);
// }
