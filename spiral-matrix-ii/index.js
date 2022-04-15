// create a spiral matrix of size n
// [
//   [1, 2, 3, 4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9, 8, 7]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */

const matrixGenerator = (n) => {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix
}




const generateSpiralMatrix = function (n) {

  const matrix = matrixGenerator(n);
  let shrinker = 0
  let top = shrinker + 1;
  let bottom = n - shrinker - 1;
  let left = shrinker;
  let right = n - shrinker - 1;
  let count = 1;
  const direction = ['right', 'down', 'left', 'up'];
  let turns = 0;

  let i = 0;
  let j = 0;
  const getDirection = () => {
    return direction[turns % 4]
  }

  while (count <= (n * n)) {
    matrix[i][j] = count;
    console.log({ count, matrix, turns, right, shrinker })
    count++;
    
    if (getDirection() === 'right') {
      j++
      if (j === right) {
        turns++
      }
    }else if (getDirection() === 'down') {
      i++
      if (i === bottom) {
        turns++
      }
    } else if (getDirection() === 'left') {
      j--
      if (j === left) {
        turns++
      }
    } else if (getDirection() === 'up') {
      i--
      if (i === top) {
        turns++
        top++
        bottom--
        left++
        right--

      }
    }

  }
  return matrix;

};


const test3 = generateSpiralMatrix(4)
// const  test1 = generateSpiralMatrix(1)
const  test20 = generateSpiralMatrix(20)

console.log({ test3 })