const process = require('process');

function addNumbers(numbers){
    const arrayOfNumber = numbers.split(',');
    let total = 0;

    arrayOfNumber.map((number) => {
        total += parseFloat(number);
    })

    console.log(`The numbers ${arrayOfNumber} - Totals: ${total}`)
}

addNumbers(process.argv[2]);