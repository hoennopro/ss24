let n = parseInt(prompt("Nhập vào một số nguyên dương:"));


if (isNaN(n) || n <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  let sum = 0;


  for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i;
  }


  if (sum % 2 === 0) {
    n++;
    sum += n;
    console.log(n);
  }

  console.log("Tổng các số từ 1 đến " + n + " là: " + sum);
}