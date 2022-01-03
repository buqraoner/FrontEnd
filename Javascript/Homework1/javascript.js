


// Kullanıcıdan bilgi alma

var kullanici = prompt("Adiniz nedir : ");

document.getElementById("myName").innerHTML =kullanici;

var zaman =new Date();
var saat=zaman.setHours();
var dakika=zaman.setMinutes();
var saniye=zaman.getSeconds();




let myClock=document.querySelector("#myClock");
myClock.innerHTML=`${saat}: ${dakika}: ${saniye}`