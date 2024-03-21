const biodata = {
  name: "Naufan",
  age: 24,
  hobbies: ["Membaca artikel", "Menonton film", "Mendengarkan musik"],
  isMarried: false,
  schoolList: [
    {
      name: "SMA Negeri 3 Bogor",
      yearIn: "2014",
      yearOut: "2017",
      major: "IPA",
    },
    {
      name: "Institut Pertanian Bogor",
      yearIn: "2019",
      yearOut: "2023",
      major: "Manajemen",
    }
  ],
  skills: [
    {
      skillName: "HTML/CSS",
      level: "Beginner",
    },
    {
      skillName: "JavaScript",
      level: "Beginner",
    }
  ],
  interestInCoding: true
}

console.log(biodata);

for (let key in biodata) {
  console.log(`Tipe data ${key} adalah ${typeof biodata[key]}`);
}