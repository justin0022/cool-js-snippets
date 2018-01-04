const complicatedObj = {
  arrayProp: [
    'Zapp',
    { second: 'Brannigan' }
  ]
}

const { arrayProp: [first, { second }] } = complicatedObj

console.log(first)
// "Zapp"
console.log(second)
// "Brannigan"
