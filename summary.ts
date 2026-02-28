interface Product {
  location: string
  maker: string
}
interface Commodity extends Product {
  price: number
}
const bacon: Commodity = {
  location: 'North Carolina',
  maker: 'Hormel',
  price: 5
}

// developer 1
class Vehicle implements Product {
  location: string
  maker: string
  private position: number
  speed: number

  constructor (speed: number, maker: string, location: string) {
    this.position = 0
    this.speed = speed
    this.location = location
    this.maker = maker
  }

  travel () {
    this.position += this.speed
  }

  getPosition () {
    return this.position
  }
}

class Car extends Vehicle {
  doors: number

  constructor (speed: number, maker: string, location: string, doors: number) {
    super(speed, maker, location)
    this.doors = doors
  }
}

// developer 2
const minivan = new Car(60, 'Toyota', 'Japan', 6)
minivan.doors
const fighter = new Vehicle(2000, 'Boeing', 'Colorado')

const goal = 5000
while (minivan.getPosition() > goal && fighter.getPosition() > goal) {
  minivan.travel()
  fighter.travel()
}
if (minivan.getPosition() > fighter.getPosition()) {
  console.log('Minivan won!')
} else {
  console.log('Fighter won!')
}

function describeProduct (product: Product) {
  console.log('This product was made by', product.maker, 'in', product.location)
}
describeProduct(bacon)
describeProduct(minivan)