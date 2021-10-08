const displayNum = document.querySelector('#display-num p');
const displayElm = document.getElementById('display-num');
const numberInput = document.getElementById('number-input');

const buttons = document.querySelectorAll('.btn');

function evenNumber() {
  let results = [];

  for (let i = 1; i <= numberInput.value; i++) {
    results.push(i);
  }
  const evenNum = results
    .filter((result) => {
      if (result % 2 === 0) {
        return result;
      }
    })
    .join('  ');

  displayElm.style.border = '3px solid #9c1515 ';
  displayNum.innerHTML = evenNum;
}

function oddNumber() {
  let results = [];

  for (let i = 1; i <= numberInput.value; i++) {
    results.push(i);
  }
  const oddNum = results
    .filter((result) => {
      if (result % 2 === 1) {
        return result;
      }
    })
    .join('  ');

  displayElm.style.border = '3px solid #f3ef18 ';
  displayNum.innerHTML = oddNum;
}

function primeNumber() {
  let results = [];

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= numberInput.value; i++) {
    results.push(i);
  }
  const primeNum = results
    .filter((result) => {
      if (isPrime(result)) {
        return result;
      }
    })
    .join('  ');

  displayElm.style.border = '3px solid #27bd27 ';
  displayNum.innerHTML = primeNum;
}
function factorial() {
  if (numberInput.value > 20) {
    alert('maximum number value is 20');
    return;
  }

  let results = [];
  for (let i = 2; i <= numberInput.value; i++) {
    results.push(i);
  }

  let result = results.reduce((acc, cur) => acc * cur);

  let reverse = result.toString().split('').reverse().join('');
  let regex = reverse.match(/\d{1,3}/g);

  const factorial = regex.join('.').split('').reverse().join('');

  displayElm.style.border = '3px solid #9c1515 ';
  displayNum.innerHTML = factorial;
}

for (let button of buttons) {
  button.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('even')) {
      evenNumber();
    }

    if (target.classList.contains('odd')) {
      oddNumber();
    }

    if (target.classList.contains('prime')) {
      primeNumber();
    }

    if (target.classList.contains('factorial')) {
      factorial();
    }
  });
}
