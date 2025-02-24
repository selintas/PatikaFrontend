// ürün arama search engine
// 1. ürünleri oluştur

let urun1 = {
    isim: "Samsung Galaxy S10",
    katergori: "Telefon",
    fiyat: 5000
}

let urun2 = {
    isim: "Samsung Galaxy S9",
    katergori: "Telefon",
    fiyat: 4000
}

let urun3 = {
    isim: "Samsung Galaxy S8",
    katergori: "Telefon",
    fiyat: 3000
}
let urunler = [urun1, urun2, urun3];
let FilteredUrunler = [];
// 2. Kullanıcıdan ürün aramasını al
let kullaniciGirdisi = prompt("Aramak istediğiniz ürünü giriniz: ");

getFiltreliUrunler(urunler  );
showFiltreliUrunler(FilteredUrunler);



function getFiltreliUrunler() {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciGirdisi.toUpperCase(), 0)) {
            FilteredUrunler.push(urun);
        }
    });
}
function showFiltreliUrunler(urunler){ 
    urunler.forEach(function(urun){
        console.log("Ürün ismi: " + urun.isim + " Ürün kategorisi: " + urun.katergori + " Ürün fiyatı: " + urun.fiyat);
    });

}
    


