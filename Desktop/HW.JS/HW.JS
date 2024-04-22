const text = "MonParis";
const pattern = /^(?!.*[A,a]).{6,}$/;
const result = pattern.test(text);
console.log(result);