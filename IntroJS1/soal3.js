const printSegitiga = 7;

// Sesuai contoh soal
if (typeof printSegitiga === "number") {
  for (let i = 1; i <= printSegitiga; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += j;
    }
    console.log(baris);
  }
} else {
  console.log("Input harus berupa angka!");
}

console.log(" ");

// Segitiga terbalik 
if (typeof printSegitiga === "number") {
  for (let i = printSegitiga; i >= 1; i--) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
      baris += j;
    }
    console.log(baris);
  }
} else {
  console.log("Input harus berupa angka!");
}

