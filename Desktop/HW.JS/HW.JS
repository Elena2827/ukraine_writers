function lenaIsNaN(value) {
    return typeof value === 'number' && value !== value;
}
console.log(lenaIsNaN(NaN));
console.log(lenaIsNaN(357));
console.log(lenaIsNaN("Olena"));



function padStart(str, symbol, count) {
    if (str.length >= count) return str;
    const padCount = count - str.length;
    const padding = symbol.repeat(padCount).slice(0, padCount);
    return padding + str;
}

function padEnd(str, symbol, count) {
    if (str.length >= count) return str;
    const padCount = count - str.length;
    const padding = symbol.repeat(padCount).slice(0, padCount);
    return str + padding;
}

function pad(str, symbol, count, isStart) {
    if (isStart) {
        return padStart(str, symbol, count);
    } else {
        return padEnd(str, symbol, count);
    }
}
console.log(pad("qwerty", "+", 10, true)); 
console.log(pad("qwerty", "+", 10, false));



function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; 
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log("Кількість згенерованих чисел:", totalNumbers);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}

checkProbabilityTheory(1000);