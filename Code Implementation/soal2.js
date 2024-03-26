// 2. Buatlah Code untuk soal dibawah ini:

// Demy membeli makanan menggunakan aplikasi PijarFood.
// Dimana terdapat 2 buah kode promo:
// - Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
// 50rb akan mendapat diskon 50%, dengan maksimal
// potongan sebesar 50rb.
// - Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
// minimal 25rb akan mendapatkan diskon 60%, dengan
// maksimal potongan sebesar 30rb.
// - Jika tidak menggunakan kode promo ‘false’

// Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
// dan setiap satu kilometer selanjutnya dikenakan penambahan
// 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
// harga makanan yang dipesan (true), jika tidak dikenakan pajak
// (false).

// TASK

// - Buatlah sebuah function yang menerima 4 parameter.
// PijarFood(harga, voucher, jarak, pajak)


// Example:
// Input: PijarFood(75000, ‘PIJARFOOD5’, 5, true)
// Output :
// Harga : 75000
// Potongan : 37500
// Biaya Antar : 14000
// Pajak : 3750
// SubTotal : 55250

const PijarFood = (harga, voucher, jarak, pajak) => {
    
    // Sistem voucher
    let potongan = 0
    if (voucher == 'PIJARFOOD5' && harga >= 50000) {
        potongan = Math.min(harga * 50/100, 50000)
    } else if (voucher == 'DITRAKTIRPIJAR' && harga >= 25000) {
        potongan = Math.min(harga * 60/100, 30000)
    } else {
        potongan = 0
    } 
    
    // Sistem ongkir
    let biayaAntar = 0
    if (jarak <= 2) {
        biayaAntar = 5000
    } else {
        biayaAntar = 5000 + ((jarak - 2) * 3000)
    }

    // Sistem pajak
    let nilaiPajak = 0
    if (pajak) {
        nilaiPajak = 5/100 *  harga
    }

    // Total biaya
    let subTotal = harga - potongan + biayaAntar + nilaiPajak

    // Tampilkan rincian biaya
    console.log(`
    Harga : ${harga}
    Potongan : ${potongan}
    Biaya Antar : ${biayaAntar}
    Pajak : ${nilaiPajak}
    Subtotal : ${subTotal}`);
}

PijarFood(75000, 'PIJARFOOD5', 5, true)
