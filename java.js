// ! Spørsmål 1
document.writeln(`<br>${"Oppgave 1"}</br>`);
console.log("lalslsa")
for (let i = 1; i<11; i++) {
    // document.writeln(`<br>${i}</br>`)
    document.writeln(`<p style="color: red;">Hello World</p>`)
}
document.writeln(`<br>${"Oppgave 2"}</br>`);
// ! Spørsmål 2
for (let i = 1; i<51; i++) {
    document.writeln(`<br>${i}</br>`)
    // document.writeln(`<p style="color: red;">Hello World</p>`)
}
document.writeln(`<br>${"Oppgave 3"}</br>`);
 
// ! Spørsmål 3
var sum = 0;
for (let i = 1; i < 11; i++) {
    sum = sum +i;
}
document.writeln(`<br>${sum}</br>`);

// Spørsmål 4
console.log("oppgave 4")
var ht = "#"
for (let i = 0; i<5; i++) {
    console.log(ht);
    ht = ht + "#"
}

document.writeln(`<br>${"Oppgave 5"}</br>`);

for (let i = 2; i<51; i++) {
    console.log(i);
    i++;
    
}
// i = i+1 betyr i++;

document.writeln(`<br>${"Oppgave 6"}</br>`);

for (let i = 0; i<91; i = i+15) {
    document.writeln(i);
}

document.writeln(`<br>${"Oppgave 7"}</br>`);

var liste = [2,6,1,55,-5, 9, -99]
console.log(liste.length);
let sTall = liste[0];

for (let i = 0; i < liste.length; i++) {
    if (liste[i] > sTall) {
        sTall = liste[i]
    }   
}

document.writeln(sTall);

document.writeln(`<br>${"Oppgave 8"}</br>`);

var storT = "RøykenVGS er best"
for (let i = 1; i <= 6; i++) { //
    document.write(`<h${i}>${storT}</h${i}>`)
}
for (let i = 6; i >= 0; i--) { //
    document.write(`<h${i}>${storT}</h${i}>`)
}
// jeg har null peiling på hvordan jeg snur dette
document.writeln(`<br>${"Oppgave 9"}</br>`);

var høyde = 6
var bredde = 9

// for (let i = 1; )

document.writeln(`<br>${"Oppgave 9"}</br>`);

var N = ""
var st = "*"
for (i = 1; i <= N; i++){
    st = st + "*"
}