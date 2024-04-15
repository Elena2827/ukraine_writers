
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
