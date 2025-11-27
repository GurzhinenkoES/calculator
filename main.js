import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="calculator">
    <h1>Калькулятор</h1>

    <div class="input-group">
      <div class="input-wrapper">
        <label for="num1">Первое число</label>
        <input type="text" id="num1" placeholder="Введите число">
      </div>

      <div class="input-wrapper">
        <label for="num2">Второе число</label>
        <input type="text" id="num2" placeholder="Введите число">
      </div>
    </div>

    <div class="buttons-grid">
      <button class="btn-add" id="btnAdd">Сумма</button>
      <button class="btn-subtract" id="btnSubtract">Разность</button>
      <button class="btn-multiply" id="btnMultiply">Произведение</button>
      <button class="btn-divide" id="btnDivide">Деление</button>
    </div>

    <div class="result-box">
      <div id="result">
        <div class="result-label">Результат</div>
        <div class="result-value">—</div>
      </div>
    </div>
  </div>
`

function getNumbers() {
  const num1 = document.getElementById('num1').value.trim()
  const num2 = document.getElementById('num2').value.trim()

  const n1 = parseFloat(num1)
  const n2 = parseFloat(num2)

  if (isNaN(n1) || isNaN(n2) || num1 === '' || num2 === '') {
    return { error: true }
  }

  return { n1, n2, error: false }
}

function displayResult(value) {
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = `
    <div class="result-label">Результат</div>
    <div class="result-value">${value}</div>
  `
}

function displayError() {
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = `
    <div class="error">Ошибка! Введите корректные числа</div>
  `
}

function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    return 'Деление на ноль!'
  }
  return a / b
}

document.getElementById('btnAdd').addEventListener('click', () => {
  const { n1, n2, error } = getNumbers()
  if (error) {
    displayError()
    return
  }
  const result = sum(n1, n2)
  displayResult(result)
})

document.getElementById('btnSubtract').addEventListener('click', () => {
  const { n1, n2, error } = getNumbers()
  if (error) {
    displayError()
    return
  }
  const result = subtract(n1, n2)
  displayResult(result)
})

document.getElementById('btnMultiply').addEventListener('click', () => {
  const { n1, n2, error } = getNumbers()
  if (error) {
    displayError()
    return
  }
  const result = multiply(n1, n2)
  displayResult(result)
})

document.getElementById('btnDivide').addEventListener('click', () => {
  const { n1, n2, error } = getNumbers()
  if (error) {
    displayError()
    return
  }
  const result = divide(n1, n2)
  displayResult(result)
})
