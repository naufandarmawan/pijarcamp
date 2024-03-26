// 3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

// Program 1: Validasi Login (then-catch)
// Mendefinisikan fungsi validateForm dengan parameter username, nama, email, dan password
const validateForm = (username, nama, email, password) => {
    return new Promise((resolve, reject) => { // Membuat sebuah promise baru.
        if (!username) { // Memeriksa apakah parameter username tidak terisi
            reject('Kolom username belum terisi.'); // Jika tidak terisi, reject dengan pesan terkait
        }
        if (!nama) { // Memeriksa apakah parameter nama tidak terisi
            reject('Kolom nama belum terisi.');
        }
        if (!email) { // Memeriksa apakah parameter email tidak terisi
            reject('Kolom email belum terisi.');
        }
        if (!password) { // Memeriksa apakah parameter password tidak terisi
            reject('Kolom password belum terisi.');
        } 
        resolve('Form berhasil divalidasi.'); // Jika semua parameter terisi, resolve dengan pesan "Form berhasil divalidasi."
    })
}

validateForm("user123", "John Doe", "john.doe@example.com", "123456")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })

// Program 2: Validasi Password (try-catch) 
const validatePassword = (password) => { // Deklarasi fungsi untuk memvalidasi password
    return new Promise((resolve, reject) => {
        if (password.length < 8) { // Memeriksa apakah panjang password kurang dari 8 karakter
            reject('Password harus minimal 8 karakter');
        }
        if (!/[A-Z]/.test(password)) { // Memeriksa apakah password mengandung minimal satu huruf besar
            reject('Password harus mengandung minimal satu huruf besar');
        }
        if (!/[a-z]/.test(password)) { // Memeriksa apakah password mengandung minimal satu huruf kecil
            reject('Password harus mengandung minimal satu huruf kecil');
        }
        if (!/\d/.test(password)) { // Memeriksa apakah password mengandung minimal satu angka
            reject('Password harus mengandung minimal satu angka');
        }
        if (!/[@#$]/.test(password)) { // Memeriksa apakah password mengandung minimal satu karakter khusus (@, #, atau $)
            reject('Password harus mengandung minimal satu karakter khusus (@, #, atau $)');
        }
        resolve('Password valid'); // Jika password memenuhi semua kriteria, maka password dianggap valid
    }
    )
}

// Fungsi async untuk memeriksa password dengan menggunakan try-catch
const checkPassword = async () => {
    try {
        // Memvalidasi password 'P@ssw0rd' menggunakan fungsi validatePassword
        const result = await validatePassword('P@ssw0rd')
        console.log(result); // Jika password valid, mencetak pesan 'Password valid'
    } catch (error) {
        console.log(error); // Jika terjadi kesalahan dalam validasi, mencetak pesan kesalahan
    }
}

checkPassword() // Memanggil fungsi checkPassword untuk memulai proses validasi password