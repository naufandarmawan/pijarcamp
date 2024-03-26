// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

const getMonth = (callback) => { // Mendefinisikan fungsi getMonth yang menerima sebuah callback sebagai parameter
    setTimeout(() => { // Menggunakan setTimeout untuk menunda eksekusi.
        let error = false // Membuat variabel error 
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"] // Array yang berisi nama-nama bulan
        if (error) {
            callback(null, month) // Jika tidak ada error, panggil callback dengan parameter null dan array month
        } else {
            callback(new Error("Sorry Data Not Found"), []) // Jika terjadi error, panggil callback dengan parameter error dan array kosong
        }
    }, 4000); // Menunggu 4 detik sebelum menjalankan kode di dalam setTimeout.
}

const showMonth = (error, result) => { // Mendefinisikan fungsi showMonth yang akan menampilkan bulan-bulan jika tidak terjadi error
    
    if (error) {
        console.log(error.message); // Jika ada error, tampilkan pesan error
    } else {
        result.map(item => console.log(item)) // Jika tidak ada error, jalankan method map untuk menampilkan setiap bulan
    }
}

getMonth(showMonth) // Memanggil fungsi getMonth dengan callback showMonth