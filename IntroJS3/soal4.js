// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini https://jsonplaceholder.typicode.com/users

// Membuat fungsi bernama showName dengan parameter url untuk menampilkan nama dari data yang diambil dari REST API.
const showName = (url) => {
    // Menggunakan method fetch untuk mengambil data dari URL yang diberikan.
    fetch(url)
        // Mengambil dan mengonversi respons HTTP dalam format JSON menjadi objek JavaScript.
        .then(response => response.json())
        // Mengambil setiap item dalam objek tersebut dan mencetak nama itemnya.
        .then(data => data.map((item) => {
            console.log(item.name)
        }))
        // Menangkap kesalahan jika terjadi error selama proses pengambilan data.
        .catch(error => console.log('Error:', error.message));
}

// Memanggil fungsi showName dengan memberikan URL dari REST API
showName('https://jsonplaceholder.typicode.com/users')