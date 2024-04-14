
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log("Сума чисел від 1 до 100, які не є кратні 3, дорівнює:", sum);


function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let j = 1;
        let row = '';
        while (j <= i) {
            row += symbol;
            j++;
        }
        console.log(row);
        i++;
    }
}
drawTriangle(5, "@");


function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(5,3));



function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangle(5, "@");