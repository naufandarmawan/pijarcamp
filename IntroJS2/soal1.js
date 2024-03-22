// 1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya(kecuali : split, reverse,join, foreach, filter)

// Revisi merapihkan output dan mengganti penamaan variabel menjadi bahasa inggris

const numbers = [1, 2, 3, 4, 5];

console.log(`
1. map()`) 
// digunakan untuk memetakan setiap elemen dalam array ke elemen baru dalam array baru.
const squaredNumber = numbers.map(number => number * number);
console.log(squaredNumber); // Output: [1, 4, 9, 16, 25]

console.log(`
2. reduce()`) 
// digunakan untuk menggabungkan semua elemen dalam array menjadi satu nilai tunggal.
const addition = numbers.reduce((a, b) => a + b);
console.log(addition); // 15

console.log(`
3. some()`) 
// digunakan untuk mengecek apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu.
const isEven = numbers.some(number => number % 2 === 0);
console.log(isEven); // true

console.log(`
4. slice()`) 
// digunakan untuk mengekstrak bagian tertentu dari sebuah array menjadi array baru.
const slicedNumber = numbers.slice(1, 4); // (mulai dari indeks 1, hingga sebelum indeks 4)
console.log(slicedNumber); // [2, 3, 4]

console.log(`
5. sort()`) 
// digunakan untuk mengurutkan elemen-elemen dalam array.  
const randomNumber = [3, 1, 4, 2];
randomNumber.sort((a, b) => a - b); // mengurutkan dari kecil ke besar
console.log(randomNumber); // [1, 2, 3, 4]

console.log(`
6. indexOf()`) 
// digunakan untuk mencari indeks pertama kemunculan elemen tertentu dalam sebuah array.
const findIndex = numbers.indexOf(2);
console.log(findIndex); // 1

const fruits = ["apple", "banana", "orange", "mango"];

console.log(`
7. find()`) 
// digunakan untuk menemukan elemen pertama dalam array yang memenuhi kondisi tertentu. Berikut contohnya:
const findFruit = fruits.find(fruit => fruit === "orange");
console.log(findFruit); // "orange"

console.log(`
8. findIndex()`) 
// mirip dengan find(), tetapi mengembalikan indeks elemen pertama yang memenuhi kondisi tertentu.
const fruitIndex = fruits.findIndex(fruit => fruit === "orange");
console.log(fruitIndex); // 2

const color1 = ["merah", "kuning"];
const color2 = ["hijau", "biru"];

console.log(`
9. concat()`) 
// digunakan untuk menggabungkan dua atau lebih array menjadi array baru.
const allColor = color1.concat(color2);
console.log(allColor); // ["merah", "kuning", "hijau", "biru"]

console.log(`
10. includes()`) 
// digunakan untuk mengecek apakah sebuah elemen tertentu terdapat di dalam sebuah array.
const hasBlue = color2.includes("biru");
console.log(hasBlue); // true