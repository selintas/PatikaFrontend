// script.js
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // Eğer tuşa karşılık gelen ses yoksa fonksiyondan çık
    
    audio.currentTime = 0; // Sesi başa sar
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Sadece transform animasyonu bittiğinde
    this.classList.remove('playing');
}

// Tüm tuşları seç
const keys = document.querySelectorAll('.drum');

// Her tuş için transition bittiğinde playing class'ını kaldır
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Klavye tuşlarını dinle
window.addEventListener('keydown', playSound);

// Fare tıklamalarını dinle
keys.forEach(key => {
    key.addEventListener('click', function() {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        
        if (!audio) return;
        
        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');
    });
});