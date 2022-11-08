// Bài 1
let vatly;
let hoahoc;
let sinhhoc;
vatly = +prompt("Nhập vào điểm Lý: ");
hoahoc = +prompt("Nhập vào điểm Hóa: ");
sinhhoc = +prompt("Nhập vào điểm Sinh: ");
let sumPoint = (vatly + hoahoc + sinhhoc);
let averagePoint = (sumPoint / 3);
document.write("Điểm tổng là: " + sumPoint);
document.write("Điểm trung bình là: " + averagePoint);

// Bài 2
let celsius;
celsius = +prompt("Nhập vào độ C: ");
let f = (celsius * 9) / 5 + 32;
document.write("Độ F là: " + f );

// Bài 3 + 4
let r;
r = +prompt("Nhập vào bán kính hình tròn: ");
let area = (r * r * 3.14);
let chuvi = (r * 2 * 3.14)
document.write("Diện tích hình tròn là: " + area);
document.write("Chu vi hình tròn là: " + chuvi);


