// 1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in
// Functions) beserta contoh penggunaannya(kecuali : split, reverse,
// join, foreach, filter)

const numbers = [1, 2, 3, 4, 5];

// // 1. map() = digunakan untuk memetakan setiap elemen
// // dalam array ke elemen baru dalam array baru.
const pangkat = numbers.map(number => number * number);
// console.log(pangkat); // Output: [1, 4, 9, 16, 25]

// // 2. reduce() = digunakan untuk menggabungkan semua elemen
// // dalam array menjadi satu nilai tunggal.
const penjumlahan = numbers.reduce((a, b) => a + b);
// console.log(penjumlahan); // 15

// // 3. some() = digunakan untuk mengecek apakah setidaknya
// // satu elemen dalam array memenuhi kondisi tertentu.
const isEven = numbers.some(number => number % 2 === 0);
// console.log(isEven); // true

// // 4. slice() = digunakan untuk mengekstrak bagian tertentu 
// // dari sebuah array menjadi array baru.
const potongAngka = numbers.slice(1, 4); // (mulai dari indeks 1, hingga sebelum indeks 4)
// console.log(potongAngka); // [2, 3, 4]

// // 5. sort() = digunakan untuk mengurutkan elemen-elemen dalam array.  
// const angka = [3, 1, 4, 2];
angka.sort((a, b) => a - b); // mengurutkan dari kecil ke besar
// console.log(angka); // [1, 2, 3, 4]

// // 6. indexOf() = digunakan untuk mencari indeks pertama 
// // kemunculan elemen tertentu dalam sebuah array.
const puluhan = [10, 20, 30, 20, 40];
const firstTwentyIndex = puluhan.indexOf(20);
// console.log(firstTwentyIndex); // 1

const fruits = ["apple", "banana", "orange", "mango"];

// // 7. find() = digunakan untuk menemukan elemen pertama 
// // dalam array yang memenuhi kondisi tertentu. Berikut contohnya:
const findFruit = fruits.find(fruit => fruit === "orange");
// console.log(findFruit); // "orange"

// // 8. findIndex() = mirip dengan find(), tetapi mengembalikan indeks 
// // elemen pertama yang memenuhi kondisi tertentu.
const findFruitIndex = fruits.findIndex(fruit => fruit === "orange");
// console.log(findFruitIndex); // 2

const warna1 = ["merah", "kuning"];
const warna2 = ["hijau", "biru"];

// // 9. concat() = digunakan untuk menggabungkan dua 
// // atau lebih array menjadi array baru.
const warnaWarna = warna1.concat(warna2);
// console.log(warnaWarna); // ["merah", "kuning", "hijau", "biru"]

// // 10. includes() = digunakan untuk mengecek apakah sebuah elemen 
// // tertentu terdapat di dalam sebuah array.
const hasBlue = warna2.includes("biru");
// console.log(hasBlue); // true