
function getMultiplier (multiplier){
  return function (aNumber){
    return aNumber*multiplier;
}


// trasformandoa  função acima em yuma arrow function

    // const getMultiplier= multiplier => aNumber => aNumber*multiplier


const double = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple getMultiplier(4);
console.log(quadruple(15));
