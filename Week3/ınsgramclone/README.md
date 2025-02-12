
# Instagram Clone
# instagrambootstrapclone

## 📌 Proje Açıklaması
Bu proje, Instagram'ın temel kullanıcı arayüzünü klonlamak amacıyla **Bootstrap ve CSS** kullanılarak geliştirilmiştir.  
Navbar, içerik alanı, hikayeler bölümü ve sağ panel gibi Instagram’ın temel bileşenleri oluşturulmuştur.

---

## 📌 Gereksinimler ve Yapılan Düzenlemeler

### 🔹 Navbar
✅ **Sabit navbar (sticky-top)** olacak şekilde ayarlandı ve sayfa aşağı kaydırıldığında yukarıda kalması sağlandı.  
✅ **Body'e padding-top: 54px;** verildi ki navbar içerik ile çakışmasın.  
✅ Navbar’ın **yüksekliği 54px** ve arka plan rengi **beyaz** yapıldı.  
✅ **Logo (navbar başı)** için `margin-left: 192px;` verildi.  
✅ **Arama kutusu**:
- `d-flex` ile ortalandı.  
- Soldan `ml-5` (5 birim margin) verildi.  
✅ **Arama kutusundaki placeholder** için:
- **assets klasöründeki arama simgesi** arkaplana eklendi.
- `background-repeat: no-repeat;` ile resmin tekrar etmesi engellendi.

---

### 🔹 Sağ Üst Menü  
✅ **Menü kısmına** soldan `ml-5`, üstten `mt-2` margin verildi.  
✅ Menü **sm boyutunda kaybolacak** şekilde `d-none d-sm-block` ile düzenlendi.

---

### 🔹 İçerik Alanı (Gönderiler)  
✅ **Gönderilerin olduğu alan** `offset-4` olacak şekilde hizalandı.  
✅ Üstten `mt-2` margin verildi.  
✅ `middlearea` class'ına **`max-height: 200px !important;`** eklendi.  
✅ **Grid sistemi**:
- `col-12 col-md-6` şeklinde ayarlandı.  
- Normal boyutta **12**, ekran küçüldüğünde **6** olacak.

---

### 🔹 Hikayeler Bölümü  
✅ Kullanıcı isimleri, **resimlerin altına** gelecek şekilde hizalandı.  
✅ Arama kutusunda kullanılan yöntem burada da kullanıldı.

---

### 🔹 Gönderi Kartı (Post Card)  
✅ **Üç nokta (menü ikonu)** sağda olacak şekilde hizalandı.  
✅ Beğenme, yorum yapma, paylaşma **kısımlarında border kaldırıldı.**  
✅ **Bookmark ikonu**, **offset-7** ile hizalandı.  
✅ **Card header ve footer** beyaz renk yapıldı.  
✅ **"Yorum paylaş"** metni sağa alındı.

---

### 🔹 Sağ Panel  
✅ **Genişliği artırıldı**, daha iyi görünmesi sağlandı.  
✅ **stickysidebar** class'ı ile sağ panel, sayfa aşağı kaydırıldıkça kaymaya devam edecek şekilde `position: sticky;` kullanıldı.  
✅ **rightpanel** class'ı için:
- **Arka plan rengi beyaz yapıldı.**  
- **Kenarlık kaldırıldı.**  
✅ **"Tümünü gör" ve "Takip et" yazıları sağa alındı.**

---

### 🔹 Genel Düzenlemeler  
✅ **Sayfa arkaplan rengi**, Instagram'ın orijinal rengine uygun olarak ayarlandı.  
✅ **Gözden kaçan hatalar düzeltildi.**  

📌 **Öneri**:  
- Projeyi geliştirirken Instagram sitesini sık sık **Inspect (inceleme)** yaparak kontrol etmen önerilir.  
- **CSS !important** kullanımına dikkat edilmelidir; gerektiğinde ve bilinçli kullanılmalıdır.  
