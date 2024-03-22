// 2. Buatlah program searching nama yang dapat dibatasi jumlah
// outputnya yang menerapkan callback function dengan data
// sebagai berikut:

// const name = [
// "Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth",
// "Ella", "Faith", "Olivia", "Penelope"]

// Contoh:
// searchName(“an”, 3, callback)

// Output:
// [“Alexandra”,”Amanda”,”Angela”]

// Revisi: mengubah penamaan variabel ke dalam bahasa inggris

// 1. Membuat variabel name yang berisi kumpulan nama sesuai soal
const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

// 2. Membuat function printHasil yang akan dimasukkan ke parameter dari searchName sebagai callback untuk menampilkan output
const printResult = (result) => {
    console.log(result);
}

// 3. membuat function utama untuk searching nama
const searchName = (keyword, limit, callback) => {
    const searchResult = name.filter((nama) => nama.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit)
    callback(searchResult)
}

searchName('an', 3, printResult)
searchName('an', 4, printResult)