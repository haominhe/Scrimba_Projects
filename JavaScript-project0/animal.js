class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    static return10() {
        return 10;
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
}

class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }

    makeNoise(sound = 'Meowww') {
        console.log(sound);
    }
}

module.exports = {Cat, Animal};