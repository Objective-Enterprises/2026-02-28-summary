interface Vehicle {
  speed: number
  maker: string
  price: number
  wheels: number
}
// type VehicleKey = keyof Vehicle // 'wheels' | 'speed' | 'maker' | 'price'
// type VehicleValue = Vehicle[keyof Vehicle]

const minivan = {
  wheels: 4,
  speed: 60,
  maker: 'Toyota',
  price: 30000
}

const fighter = {
  wheels: 6,
  speed: 2000,
  maker: 'Boeing',
  price: 20000000
}

function describeVehicle (vehicle: Vehicle, key: keyof Vehicle) {
  const value = vehicle[key]
  console.log(`The ${key} for this vehicle is ${value}`)
}
describeVehicle(minivan, 'maker')
describeVehicle(fighter, 'speed')
describeVehicle(fighter, 'wheels')