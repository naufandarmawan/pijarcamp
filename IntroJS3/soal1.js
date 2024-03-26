// 1. Buatlah sambungan program menggunakan then catch 
// dan juga try catch untuk mengecek hari kerja dari 
// kode Asynchronous dibawah dan jelaskan penggunaan 
// then catch dan try catch dengan memberikan komentar di bawahnya:

const cekHariKerja = (day) => { // Mendefinisikan fungsi cekHariKerja dengan parameter 'day'.
    return new Promise((resolve, reject)=>{ // Membuat sebuah promise baru.
        setTimeout(() => { // Menggunakan setTimeout untuk menunda eksekusi.
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] // Mendefinisikan array dataDay yang berisi nama hari kerja.
            let cek = dataDay.find((item)=>{ // Mencari apakah 'day' terdapat dalam array dataDay.
                return item === day // Mengembalikan nilai true jika 'day' terdapat dalam array.
            })
            if(cek){ // Jika 'day' merupakan hari kerja.
                resolve(cek) // Memanggil resolve dengan nilai 'cek'.
            } else { // Jika 'day' bukan merupakan hari kerja.
                reject(new Error('Hari ini bukan hari kerja')) // Memanggil reject dengan pesan error.
            } 
        }, 3000); // Menunggu 3 detik sebelum menjalankan kode di dalam setTimeout.
    })
}

// Penggunaan then catch 
// cara untuk menangani hasil yang dikembalikan oleh promise. 
// then digunakan untuk menangkap hasil yang dikembalikan oleh promise saat resolve terpenuhi,
// sedangkan catch digunakan untuk menangkap error yang terjadi saat reject terpenuhi.

cekHariKerja('senin') // Memanggil fungsi cekHariKerja dengan parameter 'senin'.
.then((result)=>{ // Menggunakan then untuk menangani hasil dari promise jika berhasil.
    console.log(`${result} adalah hari kerja`); // Mencetak hasil (hari kerja) ke konsol.
})
.catch((error)=>{ // Menggunakan catch untuk menangani error jika promise ditolak.
    console.log(error.message); // Mencetak pesan error ke konsol.
})


// Penggunaan try catch
// menangani error dalam eksekusi kode asynchronous dengan await.
// Jika pemanggilan fungsi cekHariKerja mengembalikan hasil tanpa kesalahan, hasilnya ditangkap oleh variabel res.
// Jika terjadi kesalahan, blok catch akan menangkap kesalahan tersebut dan menampilkan pesan kesalahan yang sesuai.

const dayCheck = async () => { // Mendefinisikan fungsi asynchronous dayCheck.
    try { // Mencoba menjalankan blok kode di dalamnya.
        const res = await cekHariKerja('sabtu') // Menunggu hasil dari promise cekHariKerja dengan parameter 'sabtu'.
        console.log(res); // Mencetak hasil (hari kerja) ke konsol jika promise berhasil.
    } catch (err) { // Menangkap error jika terjadi kesalahan dalam blok try.
        console.log(err.message); // Mencetak pesan error ke konsol.
    }
}

dayCheck() // Memanggil fungsi dayCheck untuk mengecek hari kerja.