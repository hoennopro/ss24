let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));


if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
  console.log("Vui lòng nhập hai số nguyên dương hợp lệ.");
} else {
  let sumOdd = 0;
  let sumEven = 0;


  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }

  console.log("Tổng các số lẻ từ " + a + " đến " + b + " là: " + sumOdd);
  console.log("Tổng các số chẵn từ " + a + " đến " + b + " là: " + sumEven);
}