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
  return value
}

const minivanMaker = describeVehicle(minivan, 'maker')
const fighterSpeed = describeVehicle(fighter, 'speed')

function formatString(value) {
  console.log(value.toUpperCase())
}
function formatNumber (value) {
  console.log(value.toFixed(2))
}
formatString(minivanMaker)
formatNumber(fighterSpeed)