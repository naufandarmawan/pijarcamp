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

// 1. Membuat variabel name yang berisi kumpulan nama sesuai soal
const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

// 2. Membuat function printHasil yang akan dimasukkan 
// ke parameter dari searchName sebagai callback untuk menampilkan output
const printHasil = (daftarNama) => {
    console.log(daftarNama);
}

// 3. membuat function utama untuk searching nama
const searchName = (keyword, limit, callback) => {
    const hasil = name.filter((nama) => nama.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit)
    callback(hasil)
}

searchName('an', 3, printHasil)