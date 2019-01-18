function zero() { return performArithmetic(0, arguments); }
function one() { return performArithmetic(1, arguments); }
function two() { return performArithmetic(2, arguments); }
function three() { return performArithmetic(3, arguments); }
function four() { return performArithmetic(4, arguments); }
function five() { return performArithmetic(5, arguments); }
function six() { return performArithmetic(6, arguments); }
function seven() { return performArithmetic(7, arguments); }
function eight() { return performArithmetic(8, arguments); }
function nine() { return performArithmetic(9, arguments); }

function performArithmetic(num, args) {
  if (args.length == 0) {
    return num;
  } else {
  
    if (args[0] == " / 0") {
      throw "Error: Divide by Zero"
    }
    
    arithExpr = num + args[0]
    floatResult = eval(arithExpr)
    intResult = Math.floor(floatResult)
    return intResult
  }
}

function plus(num) { return " + " + num }
function minus(num) { return " - " + num }
function times(num) { return " * " + num }
function dividedBy(num) { return " / " + num }