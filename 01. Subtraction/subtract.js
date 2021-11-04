function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;


    result = (Number(firstNum) - Number(secondNum));

    let resultDiv = document.getElementById('result');

    resultDiv.textContent = result;
}