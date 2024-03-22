// 3. Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
// nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
// jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang
// memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
// hasil pencarian dan menampilkannya ke layar/console.

// Contoh :

// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// [8, 14, 17]

// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

// SeleksiNilai(5, 17 , [2, 25, 4])
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”

// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// Output:
// “Nilai tidak ditemukan”

// Revisi: mengubah format fungsi tanpa else if

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // Pengecekan tipe data
    if (typeof (nilaiAwal, nilaiAkhir) !== 'number' || !Array.isArray(dataArray)) {
        console.log('Nilai tidak valid');
        return
    }

    // Pengecekan nilaiAkhir > nilaiAwal
    if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal');
        return
    }

    // Pengecekan jumlah data dalam array > 5
    if (dataArray.length <= 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5');
        return
    }

    // Fungsi mencari data
    const hasil = dataArray.sort((a, b) => a - b).filter((angka) => angka > nilaiAwal && angka < nilaiAkhir)

    // Pengecekan apakah nilai ditemukan atau tidak
    if (hasil.length === 0) {
        console.log('Nilai tidak ditemukan');
        return
    }

    // Tampilkan hasil bila semua kriteria terpenuhi
    console.log(hasil);
}

// Penggunaan sesuai contoh soal
console.log('');
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);

// Penggunaan lainnya
console.log('');
seleksiNilai('dua', 17, [2, 25, 4, 1, 30, 18]);
seleksiNilai(5, 'dua', [2, 25, 4, 1, 30, 18]);
seleksiNilai(5, 17);
seleksiNilai();


// Format fungsi else if (versi awal)

// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
//     // pengecekan tipe data input
//     if (typeof (nilaiAwal, nilaiAkhir) !== 'number' || !Array.isArray(dataArray)) {
//         console.log('Nilai tidak valid');
//         // pengecekan pertama ( nilaiAkhir > nilaiAwal)
//     } else if (nilaiAwal > nilaiAkhir) {
//         console.log('Nilai akhir harus lebih besar dari nilai awal');
//         // pengecekan kedua (jumlah data dalam array > 5)
//     } else if (dataArray.length <= 5) {
//         console.log('Jumlah angka dalam dataArray harus lebih dari 5');
//     } else {
//         // Fungsi mencari data
//         const hasil = dataArray.sort((a, b) => a - b).filter((angka) => angka > nilaiAwal && angka < nilaiAkhir)
//         // pengeckan ketiga (apakah nilai ditemukan atau tidak)
//         if (hasil.length === 0) {
//             console.log('Nilai tidak ditemukan');
//         } else {
//             console.log(hasil);
//         }
//     }
// }

// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 17, [2, 25, 4]);
// seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);