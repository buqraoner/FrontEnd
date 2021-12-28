    console.log("Deneme");

    localStorage.setItem('Anahtar','Deger');
    localStorage.setItem('KullanıcıAd','Buğra');
    localStorage.setItem('KullanıcıSoyad','Öner');
    localStorage.setItem('Tarih','14.07.1999');


    /*
    bu method local storage ve session storage için veri eklerken kullanılır
    içerisine parametre olarak önce “key” sonra da “value” değerlerini alır.



    getItem()

    getItem( )
    Bu method local storage ve session storage için value değerine erişilirken kullanılır. İçerisine parametre olarak “key” değerini alır ve 
    “value” return eder. Eğer yazılan key değerinin bir karşılığı yoksa null return eder.

    */

    localStorage.getItem('Anahtar');
    localStorage.getItem('KullanıcıAd'+'KullanıcıSoyad');

    //Null
    console.log(localStorage.getItem('KullanıcıAd'+'KullanıcıSoyad'));
    //Buğra
    console.log(localStorage.getItem('KullanıcıAd'));
    //Null
    console.log(localStorage.getItem('KullanıcıAd','KullanıcıSoyad'));
    console.log("----------------------------------------------------------------------");
    console.log(localStorage.getItem('KullanıcıSoyad'));
    console.log(localStorage.getItem('KullanıcıSoyad'));
    
    console.log(localStorage.getItem('KullanıcıSoyad + KullanıcıAd'));//Null

    console.log(localStorage.getItem('KullanıcıAd')); // Null

    console.log("---------------------------------------------------------------------------------");
    
    console.log(localStorage.getItem('KullanıcıAd'));
    console.log(localStorage.getItem('KullanıcıSoyad'));
    console.log(localStorage.getItem('Tarih'));

    console.log("----------             KEY                 ----------------------");    

    console.log(localStorage.key(0));
    console.log(localStorage.key(1));
    console.log(localStorage.key(2));
    console.log(localStorage.key(3));
    console.log(localStorage.key(4));

    console.log("----------            clear( )               ----------------------");    

    /*


    Bu method çağırıldığında local storage ve session storage içerisindeki tüm veriyi temizler.
localStorage.clear();


    */



    let isler = ["temizlik", "yemek"];
    const islerStringified = JSON.stringify(isler);
    localStorage.setItem("yapilacaklar", islerStringified);
    console.log(localStorage.getItem('yapilacaklar'));


    let btcTutucu =["BTC","52.000"];
    const btcStringified = JSON.stringify(btcTutucu);
    localStorage.setItem("beteceusdt",btcStringified);
    console.log(localStorage.getItem('beteceusdt'));


    let ElmaTutucu = ["Elma"," 4 TL"];
    const ElmaStringified = JSON.stringify(ElmaTutucu);
    localStorage.setItem("ElmaFiyatOrnek",ElmaStringified);
    console.log(localStorage.getItem('ElmaFiyatOrnek'));


let AdSoyad = ["Adınız","Soyadınız"];
const AdSoyadStringify = JSON.stringify(AdSoyad);
localStorage.setItem("AdSoyadSorucu",AdSoyadStringify);
console.log(localStorage.getItem('AdSoyadSorucu'));





const dataAsObject = JSON.parse(localStorage.getItem("yapilacaklar"));

console.log(dataAsObject);



































    








   

