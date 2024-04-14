
function drawRightTriangle(height, direction) {
    if (direction === 'left') {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '#';
            }
            console.log(row);
        }
    } else if (direction === 'right') {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= height - i; j++) {
                row += ' ';
            }
            for (let j = 1; j <= i; j++) {
                row += '#';
            }
            console.log(row);
        }
    } else {
        console.log('Invalid direction. Please specify "left" or "right".');
    }
}
drawRightTriangle(5, 'left');                



function drawRightTriangle(height, direction) {
    if (direction === 'left') {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '#';
            }
            console.log(row);
        }
    } else if (direction === 'right') {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= height - i; j++) {
                row += ' ';
            }
            for (let j = 1; j <= i; j++) {
                row += '#';
            }
            console.log(row);
        }
    } else {
        console.log('Invalid direction. Please specify "left" or "right".');
    }
}
drawRightTriangle(5, 'right');    





let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log("Сума чисел від 1 до 100, які не є кратні 3, дорівнює:", sum);



x=5;
y=3;
let result = Math.pow(x, y);
console.log(result);



let i = 1;

while (i <= 5) {
    let j = 1;
    let row = '';
    while (j <= i) {
        row += '$';
        j++;
    }
    console.log(row);
    i++;
}