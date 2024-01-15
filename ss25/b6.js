let n = parseInt(prompt("Nhập số nguyên dương n:"));


if (isNaN(n) || n <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {

  let fibonacciN = calculateFibonacci(n);

  console.log("Số Fibonacci thứ " + n + " là: " + fibonacciN);
}


function calculateFibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}