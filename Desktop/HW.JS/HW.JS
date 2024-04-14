
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
