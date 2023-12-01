import fs from 'fs';

function calibration(file) {
    const inputLines = fs.readFileSync(file, ('utf-8')).trim().split('\n');
    const values = inputLines.map((inputLine) => {
        let firstNumber = inputLine.split('').find((v) => !Number.isNaN(Number(v)));
        let lastNumber = inputLine.split('').findLast((v) => !Number.isNaN(Number(v)));
        return Number(firstNumber + lastNumber);
    })
    return values.reduce((s, v) => s + v)
}

const result = calibration('./calibrationValues.txt')
console.log(result)