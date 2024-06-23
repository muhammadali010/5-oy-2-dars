//1chi masala
// (function () {
//     let a = 10;
//     console.log(a);
// })();
// (function () {
//     var sozlar = "salom bu lIfe"
//     console.log("lIfe dagi soz", sozlar);
// }
// )();


//2chi masala
//a
// function filterlash(massiv) {
//     let sonlarik = massiv.filter(x => x % 2 === 0);
//     return sonlarik;
// }
// var massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var natija = filterlash(massiv);
// console.log("Juft sonlar:", natija);
//b
// function yigis(massiv) {
//     return massiv.reduce((acc, current) => acc + current, 0);
// }
// let massiv = [1, 2, 3, 4, 5];
// let yigindi = yigis(massiv);
// console.log(yigindi);


//3chi masala
//b
// function a(callback) {
//     console.log("2-sekund kuting");
//     setTimeout(function() {
//         callback("Asinxron funksiya");
//     }, 2000);
// }
// a(function(b) {
//     console.log(b);
// });


//4-masala
// function tes(a) {
//     if (a <= 0) {
//         return
//     }
//     console.log(a)
//     tes(a - 1);
// }
// tes(5);


// 3-qism
// 1chi masala
// let car = {
// name: 'gentra',
// age:2022,
// color:'black'
// }
// let res = Object.keys(car)
// console.log(res);


// 2chi masala
// let car = {
//     name: 'gentra',
//     age: 2022,
//     color: 'black'
// }
// let res = Object.values(car)
// console.log(res);


// 3chi masala
// let car = {
//     name: 'gentra',
//     age: 2022,
//     color: 'black'
// }
// let res = Object.entries(car)
// console.log(res);


// 4chi masala
// let car = {
//     name: 'gentra',
//     age: 2022,
//     color: 'black'
// }
// let res = Object.freeze(car)
// console.log(res);


// massivlarga oid
// 1chi masala
// 2chi masala
// 3chi masala
// let arr = [7,8,9];
// let arr2 =[1,2,3];
// let arr3 = [4,5,6];
// let res = arr2.concat(arr3,arr)
// console.log(res);


// 4chi masala
// 5chi masala
// let exampleArray = [1, 2, 3, 4, 2, 5, 2, 6];
// function findLastIndex(arr, element) {
//     return arr.lastIndexOf(element);
// }
// console.log(findLastIndex(exampleArray, 5)); 

// 6chi masala
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// function massivqoshish(arr1, arr2, element) {
//   return arr1.includes(element) && arr2.includes(element);
// }
// console.log(massivqoshish(array1, array2, 5));

// 7chi masala
// let arr = [1, 2, 3, 4, 5];
// function qidirish(arr, element) {
//     return arr.includes(element);
//   }
//   console.log(qidirish(arr, 3)); 
//   console.log(qidirish(arr, 6)); 

  
// 11chi masala
// let arr = ["bir",'ikki',"uch","tort","besh","olti","yetti","sakkiz","toqqiz","o'n"];
// function qidirish(arr) {
//     return arr.filter(str => str.length < 4);
//   }
//   console.log(qidirish(arr)); 


// 15chi masala
// let arr = ["Asadbek", "Muhammadali", "Ikrom", "Javohir",  "Jahongir"];
// function bekniqidirish(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].includes("bek")) {
//         return i;
//       }
//     }
//     return -1;
//   }  
//   console.log(bekniqidirish(arr));
  