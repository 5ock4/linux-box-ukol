const print = (x) => (y) => x + " " + y

const multiplyLazy = (x, y, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`x * y = ${x * y} (after ${ms}ms)`)
    }, ms)
  })
}

console.log(print("Wait")("for promise!"))
multiplyLazy(2, 7, 5000).then((res) => console.log(res))