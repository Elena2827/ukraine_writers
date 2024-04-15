
let user = {
    name: "Olena",
    age: 42,
    city: "Glasgow",
    pets: "cats",
    getInfo: function() {
        let info = "";
        for (let prop in this) {
            info += `${prop}: ${this[prop]}\n`;
        }
        console.log(info);
    }
};
user.getInfo();

user.newProperty = 'Нова властивість!';

user.getInfo();







var services = {
    "маникюр": 70,
    "педикюр": 80,
    "массаж ніг": 90,
    price: function() {
        return Object.values(this).filter(val => typeof val === 'number').reduce((acc, val) => acc + val, 0);
    },
    minPrice: function() {
        return Math.min(...Object.values(this).filter(val => typeof val === 'number'));
    },
    maxPrice: function() {
        return Math.max(...Object.values(this).filter(val => typeof val === 'number'));
    }
};


services["солярий"] = 200;
console.log("Загальна вартість послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуг:", services.minPrice() + " грн");
console.log("Максимальна вартість послуг:", services.maxPrice() + " грн")