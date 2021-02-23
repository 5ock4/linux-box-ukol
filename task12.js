const print = (x) => (y) => x + " " + y

const multiply = (x, y, ms=0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`x * y = ${x * y} (after ${ms}ms)`)
    }, ms)
  })
}

console.log(print("Wait")("for promise!"))
multiply(2, 7).then((res) => console.log(res))