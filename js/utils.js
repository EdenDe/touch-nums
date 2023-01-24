
function shuffle(length) {
  var numStack = []

  while (numStack.length < length) {
    var random = getRandomInt(length + 1, 1)
    if (!numStack.includes(random)) numStack.push(random)
  }
  return numStack
}

function getRandomInt(max, min) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min);
}