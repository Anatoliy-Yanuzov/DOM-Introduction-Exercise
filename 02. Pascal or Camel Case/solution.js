function solve() {
  let textInput = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;

  let text = textInput.toLowerCase().split(' ');

  let textConcat = text[0];
  if (command === 'Camel Case') {

    for (let i = 1; i < text.length; i++) {
      textConcat += text[i][0].toUpperCase()  + text[i].substring(1);
    }
  } else if (command === 'Pascal Case') {
    textConcat = '';
    for (let j = 0; j < text.length; j++) {
      textConcat += text[j][0].toUpperCase() + text[j].substring(1);
    }
  } else {
    textConcat = 'Error!'
  }

  let result = document.getElementById('result');
  result.textContent = textConcat;

}