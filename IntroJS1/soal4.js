let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincer@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipdoce: "92998-3874"
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
}

/* a. Ubahlah data tersebut menggunakan spread operator menjadi: 
name: nama anda 
email: email anda 
hobby: hobi anda */

// Cara 1
const newData = {
  name: "Naufan Darmawan",
  email: "naufandarmawan@gmail.com",
  hobby: ["membaca artikel", "menonton film", "mendengarkan musik"]
}

const newBiodata = {
  ...data,
  ...newData
}

console.log(newBiodata)

// // Cara 2
// console.log(" ");

// const newData = {...data} 
// newData.name = "Naufan Darmawan";
// newData.email = "naufandarmawan@gmail.com";
// newData.hobby = ["membaca artikel", "menonton film", "mendengarkan musik"];

// console.log(newData);


console.log(" ");

/* b. Ambilah data “street dan city” tersebut menggunakan destructuring */

const { street, city } = data.address;
console.log(street);
console.log(city);

// Followup question untuk destructuring array
const [hobby] = newBiodata.hobby;
console.log(hobby);