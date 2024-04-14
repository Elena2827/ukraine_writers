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