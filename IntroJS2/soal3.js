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

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal > nilaiAkhir){
        console.log('Nilai akhir harus lebih besar dari nilai awal');
    } else if (dataArray.length <= 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5');
    } else {
        const hasil = dataArray.sort((a,b)=>a-b).filter((angka)=>angka > nilaiAwal && angka < nilaiAkhir)
        if(hasil.length === 0){
            console.log('Nilai tidak ditemukan');
        } else {
            console.log(hasil);
        }
    } 
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);