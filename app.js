// Bagian class kue
class Kue {
    constructor(gula, asesoris, berat) {
        this._bahan = "tepung";
        this._gula = gula;
        this._asesoris = asesoris;
        this._berat = berat
    }

    // Getter bahan
    get bahan () {
        return this._gula;
    }

    // Getter gula
    get gula () {
        return this._gula;
    }

    // Getter asesoris
    get asesoris () {
        return this._asesoris;
    }

    // Getter berat
    get berat () {
        return this._berat;
    }

    // Setter Bahan
    set gula (value) {
        this._gula = value;
    }

    // Setter Bahan
    set asesoris (value) {
        this._asesoris = value;
    }

    // Setter Bahan
    set berat (value) {
        this._berat = value;
    }
}
// class kue putu
class KuePutu extends Kue {
    constructor(gulaLevel, ...args){
        super(...args)
        this._gulaLevel = gulaLevel;
    }  
    // getter gulalevel
    get gulaLevel () {
        return this._gulaLevel;
    }
    set gulaLevel (value) {
        this._gulaLevel = value;
    }
}

// Class Kue Cubit
class KueCubit extends Kue{
    constructor(...args) {
        super(...args);
        this._bahan = ["Tepung", "Telur"];
    };
};

// Class Kue Ketawa
class KueKetawa extends Kue{
    constructor(...params) {
        super(...params);
        this._bahan = ["Tepung", "Telur"];
    }
}

const KuePutuObj = new KuePutu(20, "gula jawa", "daun", 10);
console.log(KuePutuObj);

const KueCubitObj = new KueCubit("gula putih", "messes", 20);
console.log(KueCubitObj);

const KueKetawaObj = new KueKetawa("gula pasir", "wijen", 5);
console.log(KueKetawaObj);



