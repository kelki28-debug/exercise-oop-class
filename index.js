class BangunDatar{
    constructor(sisi, panjang, lebar, alas, tinggi, jari){
        // this.luasPersegi = sisi * sisi
        // this.luasPersegiPanjang = panjang * lebar
        // this.luasSegitiga = alas * tinggi
        // this.luasLingkaran = 3.14 * Math.pow(jari, 2)
        this.lebar = lebar;
        this.sisi = sisi;
        this.panjang = panjang;
        this.alas = alas;
        this.tinggi = tinggi;
        this.jari = jari;

    }
    kelilingPersegi(){
        return 4 * this.sisi
    }
    luasPersegi(){
        return this.sisi * this.sisi
    }
    kelilingPersegiPanjang(){
        return 2 * this.panjang + this.lebar
    }
    luasPersegiPanjang(){
        return this.panjang * this.lebar
    }
    kelilingSegitiga(){
        return 3 * this.sisi
    }
    luasSegitiga(){
        return this.alas * this.tinggi / 2
    }
    luaslingkaran(){
        return 3.14 * Math.pow(this.jari, 2)
    }
}

class BangunRuang extends BangunDatar{
    constructor(sisi, panjang, lebar, tinggi){
        super();
        this.volumeKubus = sisi * sisi * sisi
        this.kelilingKubus = 12 * sisi
        this.volumeBalok = panjang * lebar * tinggi
        // this.kelilingBalok = 
    }
}

persegi = new BangunRuang(2);
console.log(persegi.volumeKubus)
