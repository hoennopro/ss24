let n = parseInt(prompt("Nhập số nguyên n:"));


if (isNaN(n)) {
  console.log("Vui lòng nhập một số nguyên hợp lệ.");
} else {

  let nString = Math.abs(n).toString();
  let countEvenDigits = 0;


  for (let i = 0; i < nString.length; i++) {
    let digit = parseInt(nString[i]);
    if (digit % 2 === 0) {
      countEvenDigits++;
    }
  }

  console.log("Số lượng chữ số chẵn trong " + n + " là: " + countEvenDigits);
}