let n = parseInt(prompt("Nhập số nguyên dương n:"));


if (isNaN(n) || n <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  let sum = 0;
  let m = 0;

 
  while (sum + m + 1 <= n) {
    m++;
    sum += m;
  }

  console.log("Số nguyên dương m lớn nhất sao cho tổng 1 + 2 + 3 + ... + m < " + n + " là: " + m);
}