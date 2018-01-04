// from https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

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
