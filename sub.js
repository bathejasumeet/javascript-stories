/**
 * Subtract the tailing arguments from the first, if no tailing args passed, return the first
 * @param  {[number]} args reduced arguments, all should be numbers (JS does not differentiate between float and ints)
 * @return {[number]}      difference between arguments
 */
function sub(...args) {
  if (0 === args.length) {
    throw "Invalid number of arguments passed, expected atleast 1, passed 0";
  }
  args.forEach(ele => {
    if ("number" !== typeof ele) throw "Invalid type of parameters, all parameters should be a number";
  })
  return args.length == 1 ? args[0] : (args[0] - args.slice(1).reduce((a, b) => a + b))
}