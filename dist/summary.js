"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// developer 1
class Vehicle {
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
// developer 2
const minivan = new Vehicle(60);
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
//# sourceMappingURL=summary.js.map