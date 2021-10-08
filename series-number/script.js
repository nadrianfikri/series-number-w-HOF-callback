const displayNum = document.querySelector('#display-num p');
const displayElm = document.getElementById('display-num');
const numberInput = document.getElementById('number-input');

const evenBtn = document.getElementById('even-btn');
const oddBtn = document.getElementById('odd-btn');
const primeBtn = document.getElementById('prime-btn');

evenBtn.addEventListener('click', function () {
  let result = '';
  for (let i = 1; i <= numberInput.value; i++) {
    if (i % 2 === 0) {
      result += `${i}  `;
    }
  }
  displayElm.style.border = '3px solid #9c1515 ';
  displayNum.innerHTML = result;
});

oddBtn.addEventListener('click', function () {
  let result = '';
  for (let i = 1; i <= numberInput.value; i++) {
    if (i % 2 === 1) {
      result += `${i}  `;
    }
  }
  displayElm.style.border = '3px solid #f3ef18 ';

  displayNum.innerHTML = result;
});

primeBtn.addEventListener('click', function () {
  let result = '';

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= numberInput.value; i++) {
    if (isPrime(i)) {
      result += `${i}  `;
    }
  }
  displayElm.style.border = '3px solid #27bd27 ';

  displayNum.innerHTML = result;
});

// function performEvenNumber() {
//   let result = '';
//   for (let i = 1; i <= numberInput.value; i++) {
//     if (i % 2 === 0) {
//       result += `${i}  `;
//     }
//   }
//   displayElm.style.border = '3px solid #9c1515 ';

//   displayNum.innerHTML = result;
// }
// function performOddNumber() {
//   let result = '';
//   for (let i = 1; i <= numberInput.value; i++) {
//     if (i % 2 === 1) {
//       result += `${i}  `;
//     }
//   }
//   displayElm.style.border = '3px solid #f3ef18 ';

//   displayNum.innerHTML = result;
// }

// function performPrimeNumber() {
//   let result = '';

//   function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= numberInput.value; i++) {
//     if (isPrime(i)) {
//       result += `${i}  `;
//     }
//   }
//   displayElm.style.border = '3px solid #27bd27 ';

//   displayNum.innerHTML = result;
// }
