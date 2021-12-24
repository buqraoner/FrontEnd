/* 
function mesajGoster() {
  let mesaj = "Merhaba! Ben Javascript"; // Yerel Değişken

  alert( mesaj );
}

mesajGoster(); // Merhaba! Ben Javascript

alert( mesaj ); // <-- Hata! Bu değişken `mesajGoster` fonksiyonuna aittir.




let kullaniciAdi = 'Adem';

function mesajGoster() {
  let mesaj = 'Hello, ' + kullaniciAdi;
  alert(mesaj);
}

mesajGoster(); // Merhaba, Adem

let kullaniciAdi = 'Adem';

function mesajGoster() {
  kullaniciAdi = "Yusuf"; // (1) dışarıda bulunan değişkenin değeri değişti.

  let mesaj = 'Merhaba, ' + kullaniciAdi;
  alert(mesaj);
}

alert( kullaniciAdi ); // Fonksiyon çağırılmadan  Adem

mesajGoster();

alert( kullaniciAdi ); // fonksiyon çağırıldıktan sonra Yusuf,











































*/