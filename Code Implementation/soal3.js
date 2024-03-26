// 3. Diberikan sebuah variabel yang berisikan bilangan integer
// dengan ketentuan angka 0 (nol) dalam variabel tersebut
// merupakan pemisah antara satu bilangan dengan bilangan
// lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
// berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
// bilangan hasil pengurutan akan digabung kembali dengan tanpa
// pemisah dengan output berupa bilangan integer. Buatlah
// method/function yang menerima parameter hanya deret angka
// dan menghasilkan output seperti keterangan di atas menggunakan javascript

// contoh input: 
// divideAndSort(5956560159466056)

// contoh output: 
// 55566914566956

const divideAndSort = (number) => {
    // Pengecekan apakah input merupakan number
    if (typeof number !== 'number') {
        console.log('Input harus angka');
        return
    }

    // Mengubah number yang diinput menjadi string terlebih dahulu, lalu dipecahkan berdasarkan angka 0
    const dividedNumber = number.toString().split('0')

    // Mengurutkan angka untuk setiap item menggunakan method map dan sort.
    const sortedNumber = dividedNumber.map((item) => item.split('').sort().join(''))

    // Menggabungkan semua item menjadi 1 nilai (number)
    const finalNumber = parseInt(sortedNumber.join(''))
    
    // Cetak angka baru yang sudah diproses
    console.log(finalNumber);
}

divideAndSort(595656015946605)



