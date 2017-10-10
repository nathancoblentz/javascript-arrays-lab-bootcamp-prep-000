const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
  return kittens
}


function destructivelyRemoveFirstKitten () {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  MOARKittehs = [...kittens, "Broom"]
  return MOARKittehs
}
function prependKitten(name) {
  MOARKittehs = ["Arnold", ...kittens]
  return MOARKittehs
}
function removeLastKitten () {
  lessKittehs = kittens.slice(0, kittens.length - 1)
  return lessKittehs
}
function removeFirstKitten () {
  lessKittehs = kittens.slice(1)
  return lessKittehs
}
