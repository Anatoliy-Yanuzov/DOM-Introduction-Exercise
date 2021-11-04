function generateReport() {

    let outputElement = document.querySelector('#output');
    let boxesElement = Array.from(document.querySelectorAll('thead tr th input'));
    let infoElement = Array.from(document.querySelectorAll('tbody tr'));
    let result = [];

    for (let i = 0; i < infoElement.length; i++) {
        let report = {};
        for (let j = 0; j < boxesElement.length; j++) {

            if (boxesElement[j].checked) {
                report[boxesElement[j].name] = infoElement[i].children[j].textContent
            }
        }
        result.push(report);
    }
    outputElement.textContent = JSON.stringify(result);
}