// beden kitle endeksi hesaplama
let kilo = Number(prompt("Kilonuzu giriniz: ")); // number ile tur donusumu yapildi.

let boy = Number(prompt("Boyunuzu metre cinsinden giriniz: ")); // number ile tur donusumu yapildi.

let endeks = kilo / (boy*2); // endeks hesaplandi.

if (endeks < 18.4) {
    console.log("Zayıf: " + endeks);
} else if (endeks >= 18.5 && endeks <= 24.9) {
    console.log("Normal: " + endeks);
} else if (endeks >= 25 && endeks <= 29.9) {
    console.log("Fazla Kilolu: " + endeks);
} else if (endeks >= 30 && endeks <= 34.9) {
    console.log("Şişman (Obez) - 1. Sınıf: " + endeks);
} else if (endeks >= 35 && endeks <= 44.9) {
    console.log("Şişman (Obez) - 2. Sınıf: " + endeks);
} else {
    console.log("Aşırı Şişman (Aşırı Obez): " + endeks);
}