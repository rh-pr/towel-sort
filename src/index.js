
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix && matrix.length !== 0 ) {
    let newMatrix = [];
    matrix.forEach((el,ind)  => {
      ind % 2 === 0 ?  el.forEach( elRow => { newMatrix.push(elRow) }) : 
                       el.reverse().forEach(elRow => { newMatrix.push(elRow) })
    });
    return newMatrix;
  } 

  return [];
}
