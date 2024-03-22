
function krediHesapla(){
    var cekilecekTutar, vadeSayisi, liste;
    var aylikTaksit, odenecekToplam;

    cekilecekTutar = Number(document.getElementById("txtKrediTutari").value);
    liste = document.getElementById("taksitSayisi");
    vadeSayisi = Number(liste.value);

    odenecekToplam = cekilecekTutar * 0.10 + cekilecekTutar;
    aylikTaksit = odenecekToplam / vadeSayisi;

    document.querySelector("#sonuc").innerHTML = "Ödenecek Toplam Tutar= " + odenecekToplam + " Aylık Taksit Tutarı= " + aylikTaksit.toFixed(2);
}