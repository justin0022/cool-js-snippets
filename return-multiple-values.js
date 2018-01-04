// from https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/

function returnMultipleValues () {
  return [1, 2]
}
const [foo, bar] = returnMultipleValues()

// foo => 1
// bar => 2
