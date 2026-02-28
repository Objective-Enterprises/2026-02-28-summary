interface Vehicle {
  wheels: number
  speed: number
  maker: string
}
type VehicleValue = Vehicle[keyof Vehicle]

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

function describeVehicle <K extends keyof Vehicle> (vehicle: Vehicle, key: K) {
  return vehicle[key]
}

const minivanMaker = describeVehicle(minivan, 'maker')
const fighterSpeed = describeVehicle(fighter, 'speed')

function formatString (value: string) {
  console.log(value.toUpperCase())
}
function formatNumber (value: number) {
  console.log(value.toFixed(2))
}
formatString(minivanMaker)
formatNumber(fighterSpeed)