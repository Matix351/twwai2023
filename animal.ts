class Anima{
    constructor(public name: string) {}
    sound(): string {
        return "dzwiek"
    }
}

class Dog extends Anima{
    constructor(name: string) {
        super(name);
    }

    sound(): string {
        return "Hau!";
    }
}

class Cat extends Anima{
    constructor(name: string) {
        super(name);
    }

    sound(): string {
        return "Miau!";
    }
}

const pies = new Dog("piesel");
const kot = new Cat("kotel");

console.log(pies.name +"  "+ pies.sound());
console.log(kot.name +"  "+ kot.sound());