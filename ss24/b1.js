let userInput = prompt("Nhập vào một số nguyên dương:");


let num = parseInt(userInput);

if (isNaN(num) || num <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  console.log("Bình phương các số nguyên dương chẵn từ 1 đến " + num + " là:");


  for (let i = 2; i <= num; i += 2) {
    console.log(i + " ^ 2 = " + i ** 2);
  }
}