let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));


if (isNaN(a) || isNaN(b)) {
  console.log("Vui lòng nhập hai số nguyên hợp lệ.");
} else {

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let sum = 0;

 
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  console.log("Tổng các số nguyên trong khoảng từ " + a + " đến " + b + " là: " + sum);
}