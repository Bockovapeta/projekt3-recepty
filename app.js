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







// načtení prvního receptu do seznamu z pole receptů






nactiRecepty();


//načtení do seznamu z pole receptů
function nactiRecepty() {

    document.querySelector('#recepty').removeChild(document.querySelector('#recept'))
    for (let i = 0; i < recepty.length; i++) {

        let novyRecept = document.createElement('div');
        novyRecept.id = 'recept';
        novyRecept.className = 'recept';

        let fotoReceptu = document.createElement('img');
        fotoReceptu.className = 'recept-obrazek';
        fotoReceptu.src = (recepty[i].img);
        fotoReceptu.style.borderRadius = "5px";

        let nazevReceptu = document.createElement('h3');
        nazevReceptu.className = 'recept-info';
        nazevReceptu.innerHTML = (recepty[i].nadpis);
        nazevReceptu.style.fontSize = "16px";


        novyRecept.appendChild(fotoReceptu);
        novyRecept.appendChild(nazevReceptu);
        novyRecept.setAttribute('data-recept-index', i);


        novyRecept.setAttribute('data-hodnoceni', recepty[i].hodnoceni);
        novyRecept.setAttribute('data-kategorie', recepty[i].stitek);
        document.querySelector('#recepty').appendChild(novyRecept);

    }
}


// funkce zobrazení kliknutého receptu

const recept = document.querySelectorAll('#recept');
recept.forEach((vybranyrecept) => {
    vybranyrecept.addEventListener('click', function () {

        console.log(vybranyrecept);
        let index = vybranyrecept.dataset.receptIndex;
        console.log(index);
        document.querySelector('#recept-foto').src = recepty[index].img;
        document.querySelector('#recept-kategorie').innerHTML = recepty[index].kategorie;
        document.querySelector('#recept-hodnoceni').innerHTML = recepty[index].hodnoceni;
        document.querySelector('#recept-nazev').innerHTML = recepty[index].nadpis;
        document.querySelector('#recept-popis').innerHTML = recepty[index].popis;
    });
});

// funkce pro smazání receptů

function smazRecepty() {
    for (k = 0; k < recepty.length; k++) {

        document.querySelector('#recepty').removeChild(document.querySelector('.recept'));

    }

}


// přidání funkce na tlačítko hledej
let button = document.querySelector('button');
button.onclick = hledejRecept;
let input = document.querySelector('#hledat');
let kategorie = document.querySelector('#kategorie');
let razeni = document.querySelector('#razeni');

function hledejRecept() {

    let hledanyRecept = input.value.toLowerCase();
    let kategorieRecept = kategorie.value.toLowerCase();
    let razeniRecept = razeni.value;

    if ((hledanyRecept === '') && (kategorieRecept === '') && (razeniRecept === '')) {
        alert('Vyhledávací pole je prázdné');
    }

    else if ((hledanyRecept === '') && (kategorieRecept != '')) {
        let kategorieReceptNalez = recepty.filter(recept => recept.kategorie.toLocaleLowerCase().includes(kategorieRecept));
        smazRecepty();

        console.log(kategorieReceptNalez);



        for (j = 0; j <= kategorieReceptNalez.length; j++) {
            let recept = document.createElement('div');
            recept.id = 'recept';
            recept.className = 'recept';

            let fotoReceptu = document.createElement('img');
            fotoReceptu.className = 'recept-obrazek';
            fotoReceptu.src = kategorieReceptNalez[j].img;
            fotoReceptu.style.borderRadius = "5px";

            let nazevReceptu = document.createElement('h3');
            nazevReceptu.className = 'recept-info';
            nazevReceptu.innerHTML = kategorieReceptNalez[j].nadpis;
            nazevReceptu.style.fontSize = "16px";

            recept.appendChild(fotoReceptu);
            recept.appendChild(nazevReceptu);

            document.querySelector('#recepty').appendChild(recept);
            document.querySelector('#recept-foto').src = "";
            document.querySelector('#recept-kategorie').innerHTML = "";
            document.querySelector('#recept-hodnoceni').innerHTML = "";
            document.querySelector('#recept-nazev').innerHTML = "";
            document.querySelector('#recept-popis').innerHTML = "";
        }




    }

    else if ((hledanyRecept === '') && (razeniRecept != '')) {



        if (razeniRecept == 1) {

            //pomocí sort
        }


        else if (razeniRecept == 2) {

            // pomocí sort

        }
    }


    else {
        console.log(hledanyRecept);
        console.log(razeniRecept);
        let nalezenyRecept = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hledanyRecept));

        smazRecepty();

        console.log(nalezenyRecept);


        for (i = 0; i <= nalezenyRecept.length; i++) {
            let recept = document.createElement('div');
            recept.id = 'recept';
            recept.className = 'recept';

            let fotoReceptu = document.createElement('img');
            fotoReceptu.className = 'recept-obrazek';
            fotoReceptu.src = nalezenyRecept[i].img;
            fotoReceptu.style.borderRadius = "5px";

            let nazevReceptu = document.createElement('h3');
            nazevReceptu.className = 'recept-info';
            nazevReceptu.innerHTML = nalezenyRecept[i].nadpis;
            nazevReceptu.style.fontSize = "16px";

            recept.appendChild(fotoReceptu);
            recept.appendChild(nazevReceptu);

            document.querySelector('#recepty').appendChild(recept);
        }


    }


}

