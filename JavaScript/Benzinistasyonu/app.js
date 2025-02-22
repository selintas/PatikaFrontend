// benzın ıstasyonu 

let dizel = 24.53, 
    benzin = 22.53, 
    lpg = 11.1;

    const yeniSatır = "\r\n";

    const yakıtMetni = "1. Dizel: " + yeniSatır 
    + "2. Benzin: " + yeniSatır 
    + "3. LPG: " + yeniSatır
    + "Yakıt türü seçiniz: ";

     let yakıtTipi= prompt(yakıtMetni);
     let litre = Number(prompt("Kaç litre yakıt alacaksınız?"));
     let bakiye = Number(prompt("bakiye giriniz: "));

     if (yakıtTipi == "1") {
        // dizel
        let tutar = litre * dizel;
        if (bakiye >= tutar) {
            console.log("Yakıt alım işlemi başarılı! Kalan bakiye: " + (bakiye - tutar));
        } else {
            console.log("Yetersiz bakiye! Kalan bakiye: " + bakiye);
        }
     }else if (yakıtTipi == "2") {
        // benzin benzer code
    } else if (yakıtTipi == "3") {
        // lpg benzer code..
    } else {
        alert("Geçerli seçim yapınız!");
    }