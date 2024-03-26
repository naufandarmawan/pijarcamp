// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini https://jsonplaceholder.typicode.com/users

// 1. Membuat sebuah fungsi bernama showName dengan parameter url untuk menampilkan nama dari data yang diambil dari REST API.
const showName = (url) => {
    // 2. Menggunakan method fetch untuk mengambil data dari URL yang diberikan.
    fetch(url)
        // 3. Menangani respons dari permintaan dengan menggunakan .then.
        .then(response => response.json())
        // 4. Setelah data diambil, kita memprosesnya dengan mengambil properti 'name' dari setiap item dan mencetaknya.
        .then(data => data.map((item) => {
            console.log(item.name)
        }))
        // 5. Menangani kesalahan jika terjadi error selama proses pengambilan data.
        .catch(error => console.log('Error:', error.message));
}

// 6. Memanggil fungsi showName dengan memberikan URL dari REST API sebagai argumen.
showName('https://jsonplaceholder.typicode.com/users')