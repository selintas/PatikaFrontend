let vize1 = Number(prompt("Vize 1 notunuzu giriniz: "));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

console.log(ortalama);

if (ortalama >= 80) {
    console.log("AA");
} else if (ortalama >= 70) {
    console.log("BA");
} else if (ortalama >= 60) {
    console.log("BB");
} else if (ortalama >= 50) {
    console.log("CB");
} else if (ortalama >= 40) {
    console.log("CC");
} else if (ortalama >= 30) {
    console.log("DC");
} else if (ortalama >= 20) {
    console.log("DD");
} else {
    console.log("FF");
    alert("Kaldınız! " + ortalama);
}