const box1 = document.getElementById('circle');

// data-value 값을 변경할 때마다 실행되는 함수
function updateSquare(value) {
  if (value === 1) {
    box1.classList.add('off');
  } else {
    box1.classList.remove('off');
  }
}

// data-value 값을 직접 지정하여 변경하는 예시
// data-value 값이 0이면 붉은 사각형, 1이면 푸른 사각형이 나타남
let dataValue = 1;

// data-value 값을 변경할 때마다 updateSquare 함수를 실행
updateSquare(dataValue);

const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');


