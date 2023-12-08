//zad01
console.log('Pierwszy skrypt - działa');

//zad02
let tab = [1,2,3,4,5,6];
console.log(tab);
console.log("wielkosc tablicy = " + tab.length);
tab.pop();
console.log("wielkosc tablicy po tab.pop = " + tab.length);
console.log(tab);

//zad03
function wstaw(tab, pCzyK, el ) {
    let tTab = tab;
    if(pCzyK === 0)
        tTab.unshift(el);
    else if(pCzyK === 1)
        tTab.push(el);
    else
        console.log("illegal argument")
    return tTab;
}

console.log(wstaw(tab, 10, 7));
console.log(wstaw(tab, 1, 7));
console.log(wstaw(tab, 0, 0));

//zad04

function splitTxt(text){
    let tab = text.split('.')
    let tab2 = tab.map(function (x) {
        return Math.pow(x,2);
    });
    return tab2.join('.');
}

let myText = '1.2.3.4.5.6.7.8';
console.log(splitTxt(myText));


//zadanie 05
const square = (a) => a*a;
console.log(square(4));
console.log(square(-4));

//zadanie06

function randomizer(tab){
    return tab[Math.floor(Math.random() * tab.length)];
}

const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];

console.log(randomizer(students));

// zad07
function lottery(iloscCyferek, czas) {
    let count = 0;
    function myRandomizer() {
        if(count < iloscCyferek ) {
            let lNumber = Math.floor(Math.random()* 64);
            console.log(lNumber);
            count++;
            setTimeout(myRandomizer, 1000 * czas );
        }
    }
    myRandomizer()
}

lottery(6,0.5);

const conTest = (text, time) => {
    setInterval(() => {
        console.log("Witaj " + text + '!');
    }, time);
};
conTest('Mateusz', 3000);