const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
  const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  let grade = "";
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata <= 89) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata <= 79) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata <= 69) {
    grade = "D";
    // Revisi range untuk grade E  
  } else if (rataRata >= 0 && rataRata <= 59) {
    grade = "E";
  } else {
    grade = "Tidak Valid";
  }

  console.log("Rata-rata = " + rataRata);
  console.log("Grade = " + grade);
} else {
  console.log("Semua nilai harus diisi!");
}