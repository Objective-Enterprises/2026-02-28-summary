"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bacon = {
    maker: 'Hormel',
    price: 5
};
// developer 1
class Vehicle {
    // maker: string
    position;
    speed;
    constructor(speed) {
        this.position = 0;
        this.speed = speed;
    }
    travel() {
        this.position += this.speed;
    }
    getPosition() {
        return this.position;
    }
}
class Car extends Vehicle {
    doors;
    constructor(speed, doors) {
        super(speed);
        this.doors = doors;
    }
}
// developer 2
const minivan = new Car(60, 6);
minivan.doors;
const fighter = new Vehicle(2000);
const goal = 5000;
while (minivan.getPosition() > goal && fighter.getPosition() > goal) {
    minivan.travel();
    fighter.travel();
}
if (minivan.getPosition() > fighter.getPosition()) {
    console.log('Minivan won!');
}
else {
    console.log('Fighter won!');
}
function describeProduct(product) {
    console.log('This product was made by:', product.maker);
}
describeProduct(bacon);
//# sourceMappingURL=summary.js.map