function lenaIsNaN(value) {
    return typeof value === 'number' && value !== value;
}
console.log(lenaIsNaN(NaN));
console.log(lenaIsNaN(357));
console.log(lenaIsNaN("Olena"));
