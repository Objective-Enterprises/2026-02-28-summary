const minivan = {
  wheels: 4,
  speed: 60,
  maker: 'Toyota'
}

const fighter = {
  wheels: 6,
  speed: 2000,
  maker: 'Boeing'
}

function describeVehicle (vehicle, key) {
  const value = vehicle[key]
  console.log(`The ${key} for this vehicle is ${value}`)
}
describeVehicle(minivan, 'maker')
describeVehicle(fighter, 'speed')
describeVehicle(fighter, 'price')