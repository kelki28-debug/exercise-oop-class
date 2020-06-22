class BangunDatar{
    constructor(sisi, panjang, lebar, alas, tinggi, jari){
        this.luasPersegi = sisi * sisi
        this.luasPersegiPanjang = panjang * lebar
        this.luasSegitiga = alas * tinggi
        this.luasLingkaran = 3.14 * Math.pow(jari, 2)
    }
    // luasPersegi(){
    //     return this.sisi * this.sisi
    // }
    // luasPersegiPanjang(){
    //     return this.panjang * this.lebar
    // }
    // segitiga(){
    //     return this.alas * this.tinggi / 2
    // }
    // lingkaran(){
    //     return 3.14 
    // }
}

class BangunRuang extends BangunDatar{
    constructor(sisi, panjang, lebar, alas, tinggi){
        super(sisi, panjang, lebar, alas, tinggi);
        this.volumeKubus = sisi * sisi * sisi
        this.volumeBalok = panjang * lebar * tinggi
    }
}

persegi = new BangunDatar(2);
console.log(persegi.volume)
