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

function showTime() {
  const clockElement = document.getElementById('myClock');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  setInterval(() => {
    const now = new Date();
    const day = days[now.getDay()];
    const time = now.toLocaleTimeString();
    clockElement.innerHTML = ` ${time}, ${day}`;
  }, 1000);
}

showTime();

//Dinamik olarak Element olusturma

const LastDiv = document.querySelectorAll('.text-center')[0];

console.log(LastDiv);

const link = document.createElement('a'); // Changed 'element' to 'link'

link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3 mb-3";
link.innerHTML = "Search in Google";  //a etiketi içerisine yazı yazdık.

// buton kutu içerisine al - deneme
link.style.display = "block";
link.style.width = "200px";
link.style.margin = "auto";
link.style.padding = "10px";
link.style.textAlign = "center";
link.style.textDecoration = "none";
link.style.color = "#fff";
link.style.backgroundColor = "darkgray";
//link.style.border = "2px solid #e98208";
link.style.borderRadius = "5px";
link.style.fontWeight = "bold";
link.style.fontSize = "20px";
link.style.cursor = "pointer";

link.target = "_blank";

link.href = "https://www.google.com";

LastDiv.appendChild(link);

console.log(link);
