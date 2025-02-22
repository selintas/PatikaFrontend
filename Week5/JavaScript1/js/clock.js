// popup actım.
//alert("uyarı mesajı");

//Prompomt açtım.
// let isim = toString(prompt("Adınızı giriniz: "));

// console.log(typeof isim);

let userName = prompt("Adınızı giriniz: ");
let age = prompt("Yaşınızı giriniz: ");

check(userName, age);

function check(userName, age) {
    if (userName == "" || age === "") {
        console.log("Lütfen boş bırakmayınız!");
    } else if (isNaN(age)) {
        console.log("Yaşınızı sayı olarak giriniz!");
    } else {
        console.log("Adınız: " + userName + "\nYaşınız: " + age);

        //! Girilen isim id ile alınarak HTML'de gösterildi.
        document.getElementById("myName").textContent = userName; // HTML'de id'si myName olan elementin textContent'ini userName'e eşitledik.

        

        //* yaş bilgisi eklemedık daha sonra ekleyecegız.

        // document.getElementById("myAge").textContent = age; // HTML'de id'si myAge olan elementin textContent'ini age'e eşitledik.
    }
}