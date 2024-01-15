let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));


if (isNaN(a) || isNaN(b)) {
  console.log("Vui lòng nhập hai số nguyên hợp lệ.");
} else {
 
  let result = Math.pow(a, b);

  console.log("Kết quả của biểu thức " + a + "^" + b + " là: " + result);
}