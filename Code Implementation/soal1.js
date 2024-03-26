// Buat code dari tugas Computer Science dibawah ini

// Deteksi Palindrom
// Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
// tidak. Misalnya teks “Malam”, output = palindrom.

// Reverse Words
// Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
// terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript
// belajar Saya”


// Deteksi Palindrome
const isPalindrome = (text) => {
    // 1. Membuat teks menjadi lowercase
    const cleanedText = text.toLowerCase()
    // const cleanedText = text.toLowerCase().replace(/[^A-Za-z0–9]/g, ''); // Case palindrome dalam bentuk kalimat
    const reversedText = cleanedText.split('').reverse().join('');

    // 2. Pengecekan apakah teks yang diinput sama dengan teks yang sudah dibalik, dan tampilkan hasilnya
    if (cleanedText === reversedText) {
        console.log('Palindrom');
    } else {
        console.log('Bukan Palindrom');
    }
}

isPalindrome('Malam')


// Reverse Text
const reverseText = (text) => {
    const reversedText = text.split(' ').reverse().join(' ')
    console.log(reversedText);
}

reverseText('Saya belajar Javascript')