/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/



//doplnění dalších receptů do seznamu z pole receptů



let poziceReceptu = 0;
document.querySelector('#recepty img').src = (recepty[poziceReceptu].img);
document.querySelector('#recepty h3').innerHTML = recepty[poziceReceptu].nadpis;




for (let i = 1; i < recepty.length; i++) {
    poziceReceptu = poziceReceptu + 1;
    let recept = document.createElement('div');
    recept.id = 'recept';
    recept.className = 'recept';

    let fotoReceptu = document.createElement('img');
    fotoReceptu.className = 'recept-obrazek';
    fotoReceptu.src = recepty[poziceReceptu].img;
    fotoReceptu.style.borderRadius = "5px";

    let nazevReceptu = document.createElement('h3');
    nazevReceptu.className = 'recept-info';
    nazevReceptu.innerHTML = recepty[poziceReceptu].nadpis;
    nazevReceptu.style.fontSize = "16px";



    let pozice = document.createElement('p');
    pozice.innerHTML = poziceReceptu;
    pozice.style.display = 'none';
    recept.appendChild(pozice);




    recept.appendChild(fotoReceptu);
    recept.appendChild(nazevReceptu);




    document.querySelector('#recepty').appendChild(recept);







}




let vybranyRecept = document.querySelectorAll('#recept');


vybranyRecept.forEach((recept) => {
    recept.addEventListener('click', zobrazRecept);
});







function zobrazRecept() {
    console.log(this);


    // localStorage.this = JSON.parse(this);
    // let vybrane = localStorage.this;
    // console.log(vybrane);

}




/*
localStorage.recepty = JSON.stringify(recepty);
let hodnota = localStorage.recepty;


let poziceReceptu = 0;
document.querySelector('#recepty img').src = (recepty[poziceReceptu].img);
document.querySelector('#recepty h3').innerHTML = recepty[poziceReceptu].nadpis;

console.log(recepty);
nactiRecepty();

function nactiRecepty() {


    for (let i = 0; i < recepty.length; i++) {

        let recept = document.createElement('div');
        recept.id = 'recept';
        recept.className = 'recept';

        let fotoReceptu = document.createElement('img');
        fotoReceptu.className = 'recept-obrazek';
        fotoReceptu.src = (recepty[i].img);
        fotoReceptu.style.borderRadius = "5px";

        let nazevReceptu = document.createElement('h3');
        nazevReceptu.className = 'recept-info';
        nazevReceptu.innerHTML = (recepty[i].nadpis);
        nazevReceptu.style.fontSize = "16px";



        recept.appendChild(fotoReceptu);
        recept.appendChild(nazevReceptu);




        document.querySelector('#recepty').appendChild(recept);
    }
}

let vybranyRecept = document.querySelectorAll('#recept');


vybranyRecept.forEach((recept) => {
    recept.addEventListener('click', zobrazRecept);
});

function zobrazRecept() {

    console.log(this);

}

*/




/*

vybranyRecept.forEach((recept) => {
    recept.addEventListener('click', zobrazRecept);
});

function zobrazRecept() {

    console.log(hodnota);

}
*/



/*

let button = document.querySelector('button');
button.onclick = hledejRecept;

function hledejRecept() {

    let hledanyRecept = document.querySelector('input[type="text"]').value;

    console.log(hledanyRecept);

}



document.querySelector('input').addEventListener('change', filtrujRecept);

function filtrujRecept() {
    if (('input[type="text"]').value === recepty[poziceReceptu].nadpis) {
        return true;

    }
    else {
        //jinak vymaž recept z adresáře s recepty
        return false;
    }
}



*/