const calculator =  {

  init: () => {
    calculator.display = document.querySelector('input');
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', calculator.result);
    const eraseBtn = document.querySelector('#erase');
    eraseBtn.addEventListener('click', calculator.eraseDisplay);

    const buttons = document.querySelectorAll('.operation');
    for(const button of buttons){
      button.addEventListener('click', calculator.calculatorDisplay);
    }
  },
  calculatorDisplay: (event) => {
    calculator.display.value += event.target.value;
  },
  eraseDisplay: () => {
    calculator.display.value = "";
  },
  result: () => {
    calculator.display.value = eval(calculator.display.value);
  }

}

document.addEventListener('DOMContentLoaded', calculator.init);