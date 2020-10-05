// function kiemtraSonguyente(number) {

//     var status = true;

//     if (number < 2) {
//         status = true;
//     } else if (number == 2) {
//         console.log('ok');
//         status = true;
//     } else {
//         for (var i = 3; i < number; i++) {
//             if (number % i == 0) {
//                 status = false;
//                 break;
//             }
//         }
//     }
//     console.log(kiemtraSonguyente(number));
// }

// var today = {
//     thu: 'Thu hai',
//     ngay: "14/09/2020",
//     nhietDo: 28,
//     Status: 'rain',
// }
// if (today.Status === "rain") {

//     console.log('Hom nay troi mua ' + today.Status);
// } else {

//     console.log('Hom nay troi nang ');
// }

// var number = [1, 5, 2, 10];
// var string = ['con dog', 'dau moi', ' con cat '];
// var array = [true, { name: 'Niko', age: 28 }, ' bay vao thien ha'];


// var number1 = [0, 2, 10, 99, 100, 3, 5, 8];
// for (var i = 0; i < number1.length; i++) {
//     console.log(number1);
// }

// number1[2] = 2000;
// console.log(number1);

// var animals = [{
//         name: "Tom",
//         weight: 20,
//     },
//     {
//         name: "Shiba",
//         weight: 100,
//     },
//     {
//         name: "Mickey",
//         weight: 10,
//     },
//     {
//         name: "Daisy",
//         weight: 25,
//     },
//     {
//         name: "Bulldog",
//         weight: 150,
//     },
// ];

// function checkWeight(listAnimal) {
//     for (let i = 0; i < animals.length; i++) {
//         if (animals[i].weight > 100) {
//             console.log(animals[i]);
//         }
//     }

// }


// var rectag=  {
//     weight: '',
//     height: '' ,
//     getW : function(weight) {
//         console.log(weight ); 
//     },


// };

// function deleteNumber(array, n) {
//     for (let i = 1; i <= n; i++) {
//         array.pop();
//     }
//     return array;
// }
// var arrayA = [2, 4, 6, 7];
// var result = deleteNumber(arrayA, 2);
// console.log(result);

// function randomArrayandx10() {
//     var array = [];
//     for (var i = 0; i < 5; i++) {
//         array[i] = Math.floor(Math.random() * 10);
//     }
//     console.log(array);
//     var result = array.map(function(item) {
//         return item * 10;
//     });
//     return result;
// }

// var result = randomArrayandx10();
// console.log(result);

// var arrayA = [2, 5, 6, 7, 8];   // nhan x10 array

// function mutiply10(array) {
//     var result = array.map(function(item) {
//         return item * 10;
//     });
//     console.log(result);
// }

// mutiply10(arrayA);


//return name  array 
// var users = [{
//         name: "Angelina Jolie",
//         age: 80

//     },
//     {
//         name: "Eric Jones",
//         age: 2

//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16

//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// function FilterName(array) {
//     var result = array.map(function(item) {
//         return item.name;
//     }); {

//     }
//     console.log(result);
// }
// FilterName(users);


//bai 9 :

// var stringArray = ['Blue', 'Humpback', 'Beluga', 'Pink', 'Yellow'];
// stringArray.sort(function(a, b) {
//     return b.length - a.length;


// });
// console.log(stringArray);
// tra object value tu thap den cao 
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];

// items.sort(function(a, b) { return a.value - b.value });
// console.log(items);



// var students = [
//     { name: 'A', score: 100 },
//     { name: 'B', score: 10 },
//     { name: 'C', score: 101 },
//     { name: 'D', score: 50 },
//     { name: 'E', score: 75 }
// ];
// students.sort(function(a, b) { return a.score - b.score });


// console.log(students);
// function addtoArray(array, newArray, index) {



// }

// //i chay ve tu lon xuong nen i phai lon hon hoac bang index
// for (var i = array.length - 1; i >= index; i--){

// }
// function reverseString(str) {
//     var newStr = '';
//     for (var i = str.length - 1; i >= 0; i--) {

//         newStr += str[i];
//     }
//     return newStr;
// }

// console.log(reverseString('word'));
// var shoppingCart = [
//     { title: "Book", price: 90000 },
//     { title: "Computer", price: 45000 },
//     { title: "Ball", price: 5 },
//     { title: "iphone", price: 2000 },
//     { title: "car", price: 90000 }
// ];

// var result = shoppingCart.reduce(function(a, b) {
//     console.log('Each turn');
//     console.log(a);
//     console.log(b);
//     return a + b.price;
// }, 0);


// console.log(result);

// var readlineSync = require('readline-sync');

// // Wait for user's response.
// var userName = readlineSync.question('May I have your name? ');
// var age = readlineSync.question('What is your age ? ');


// var products = [{
//         Number: "1",
//         Name: 'Phone',
//         Quantity: 5,
//         Price: 20000,
//         DayArrival: '22/3/2003'

//     },
//     {
//         Number: "2",
//         Name: 'Laptop',
//         Quantity: 9,
//         Price: 30000,
//         DayArrival: '19/8/2002'
//     },
//     {
//         Number: "3",
//         Name: 'TV',
//         Quantity: 11,
//         Price: 40000,
//         DayArrival: '5/6/2007'
//     },
//     {
//         Number: "4",
//         Name: 'Fridge',
//         Quantity: 6,
//         Price: 50000,
//         DayArrival: '2/1/2005'

//     },
//     {
//         Number: "5",
//         Name: 'Washing Machine',
//         Quantity: 4,
//         Price: 60000,
//         DayArrival: '4/2/2020'
//     }
// ]

// choose = ['Them San Pham',
//         'Hien thi cac san pham trong kho',
//         'Xóa sản phẩm trong kho',
//         'Sắp xếp sản phẩm theo ngày tháng và hiển thị ra màn hình',
//         'Tính tổng tiền các sản phẩm trong kho ',
//         'Đếm xem có bao nhiêu sản phẩm giá bằng nhau và hiển thị ra màn hình',
//         'Hiển thị ra 3 sản phẩm có số lượng nhiều nhất trong kho ',
//         'Xuất dữ liệu ra file excel ',
//         'Thoát chương trình'
//     ],
//     index = readlineSync.keyInSelect(choose, 'Which option?');
// console.log('Ok, ' + choose[index] + '');


// var sanpham = {
//     maSanPham = '',
//     tenSanPham = '',
//     soLuongTrongKho = 0,
//     giaSanPham = 0,
//     ngayNhapKho = ''

// };




var readlineSync = require('readline-sync');
var listProducts = [{
        name: "apple",

        price: 60000,

        quantity: 20,

        date: "23/2/2019",
    },
    {
        name: "orange",

        price: 30000,

        quantity: 50,

        date: "24/6/2017"

    },
    {
        name: "mango",

        price: 40000,

        quantity: 100,

        date: "23/4/2018"


    },
    {
        name: "banana",

        price: 40000,

        quantity: 40,

        date: "23/4/2018"


    }

];

// while (true) {
//     menu();
//     var select = parseInt(readlineSync.question('Nhap lua chon : '));
//     switch (select) {
//         case 1:
//             console.log('lua chon 1');
//             listProducts = addNewProduct(listProducts);
//             console.log(listProducts);
//             break;
//         case 2:
//             console.log('lua chon 2');
//             hienThiSanPham(listProducts);
//             var luachon = readlineSync.question('Ban co muon tiep tuc ko? tiep tuc an y con ko an n ');
//             if (luachon == 'y') {
//                 break;
//             } else {
//                 return;
//             }

//         case 3:
//             console.log('lua chon 3');
//             listProducts = xoaSanPhamTheoTen(listProducts);
//             hienThiSanPham(listProducts);
//             break;

//         case 4:
//             console.log('lua chon 4');
//             listProducts = sapXeptheoGiaTien(listProducts);
//             console.log(listProducts);
//             break;
//         case 5:
//             console.log('Sap xep theo thoi gian');
//             listProducts = sapXepTheoThoiGian(listProducts);
//             break;
//         case 6:
//             console.log('Tinh Tong Tien');
//             listProducts = tinhTongTien(listProducts);
//         case 0:
//             return;
//         default:
//             console.log('lua chon ko hop le ');
//             break;
//     }
// }

// // // function addNewProduct(baseProductLists) {
// // //     console.log('Nhap thong tin san pham');
// // //     var addName = readlineSync.question('Name: ');
// // //     var addId = readlineSync.question('ID: ');
// // //     var addQuantity = readlineSync.question('Quantity: ');
// // //     var addPrice = readlineSync.question('Price: ');
// // //     var addDate = readlineSync.question('Date: ');

// // //     var newProduct = {
// // //         name: addName,
// // //         id: addId,
// // //         quantity: addQuantity,
// // //         price: addPrice,
// // //         date: addDate

// // //     };
// // //     baseProductLists.push(newProduct);
// // //     return baseProductLists;
// // // }


// function menu() {
//     console.log('Thêm sản phẩm');
//     console.log('Hiển thị tất cả sản phẩm trong kho');
//     console.log('Xóa sản phẩm trong kho ');
//     console.log('Sắp xếp sản phẩm theo ngày tháng và hiển thị ra màn hình');
//     console.log('Sắp xếp sản phẩm theo giá tiền và hiển thị ra màn hình ');
//     console.log('Tính tổng tiền các sản phẩm trong kho');
//     console.log('Đếm xem có bao nhiêu sản phẩm giá bằng nhau và hiển thị ra màn hình');
//     console.log('Hiển thị ra 3 sản phẩm có số lượng nhiều nhất trong kho ');
//     console.log('Xuất dữ liệu ra file excel  ');
//     console.log('Thoát chương trình ');
// }

// function hienThiSanPham(products) {
//     for (i = 0; i < products.length; i++) {

//         console.log(" Id " + products[i].id + " Name " + products[i].name + " Quantity: " + products[i].quantity + " Price " + products[i].price + " Date " + products[i].date);
//     }


// }

// function xoaSanPhamTheoTen(baseProductLists) {
//     var name = readlineSync.question(' Name: ');
//     console.log(name);
//     var index = -1;
//     for (var i = 0; i < baseProductLists.length; i++) {
//         if (baseProductLists[i].name == name) {
//             index = i;
//         }
//         if (i != -1) {
//             baseProductLists.splice(index, 1);
//         } else {
//             console.log('Khong ton tai san pham nay');
//         }
//         return baseProductLists;

//     }
// }

// function sapXeptheoGiaTien(baseProductLists) {
//     baseProductLists.sort(function(a, b) {
//         return a.price - b.price;
//     });

//     return baseProductLists;

// }

// function sapXepTheoThoiGian(baseProductLists) {
//     baseProductLists.sort(function(a, b) {
//         var strDate1 = chuyenDoiDinhDangNgayThang(a.date);
//         var strDate2 = chuyenDoiDinhDangNgayThang(b.date);
//         var date1 = new Date(strDate1);
//         var date2 = new Date(strDate2);

//         return date1.getTime() - date2.getTime();
//     });
//     console.log(baseProductLists);

//     return baseProductLists;
// }

// function chuyenDoiDinhDangNgayThang(base) {
//     var newFormat = base.split("/");
//     newFormat = newFormat.reverse();
//     newFormat = newFormat.join("-");

//     return newFormat;
// }

// //c1
// function tongTien() {
//     var sumMoney = 0;

//     sumMoney = listProducts.reduce(function(a, b) {
//         return a + (b.quantity * b.price);
//     }, 0);
//     console.log(sumMoney);
//     return sumMoney;
// }
// // tongTien(listProducts);

// //c2 
// function tinhTongTien(Total) {
//     var sum = 0;

//     for (var i = 0; i < Total.length; i++) {
//         sum += Total[i].price * Total[i].quantity;
//     }
//     console.log(sum);
//     return tinhTongTien;

// }
// tinhTongTien(listProducts);

// function hienThiTheoTungGiaTien(Total) {
//     var cacLoaiGiaTien = [];
//     for (i = 0; i < Total.length; i++) {
//         if (cacLoaiGiaTien.indexOf(Total[i].price) == -1) {

//             cacLoaiGiaTien.push(Total[i].price);
//         }
//     }
//     for (i = 0; i < cacLoaiGiaTien.length; i++) {
//         for (j = 0; j < Total.length; j++) {
//             if (cacLoaiGiaTien[i] == Total[j].price) {
//                 console.log("Gia tien " + cacLoaiGiaTien[i] + " $ : " + Total[j].name);


//             }

//         }

//     }

// }

// hienThiTheoTungGiaTien(listProducts);


// function sanPhamNhieuNhatKho(Products) {
//     Products.sort(function(a, b) {
//         return b.quantity - a.quantity;
//     });
//     var result = [];
//     result.push(Products[0]);
//     result.push(Products[1]);
//     result.push(Products[2]);

//     console.log(result);
// }
// sanPhamNhieuNhatKho(listProducts);


function xuatFileExCel(Product) {
    var data = "";
    for (var i = 0; i < Product.length; i++) {
        data += Product[i].name + "\t";
        data += Product[i].price + "\t";
        data += Product[i].quantity + "\t";
        data += Product[i].date + +"\n";
    }
    fs.appendFile("Products.xls", data, function(err) {
        console.log("Hoan Thanh");
    });

}

