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

    let poziceReceptu = 0;
    document.querySelector('#recept img').src = (recepty[poziceReceptu].img);
    document.querySelector('#recept h3').innerHTML = recepty[poziceReceptu].nadpis;


    for (let i = 1; i < recepty.length; i++) {

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



const recept = document.querySelectorAll('#recept');


recept.forEach((vybranyrecept) => {
    vybranyrecept.addEventListener('click', function () {

        console.log(vybranyrecept);

    });
});



// přidání funkce na tlačítko hledej
let button = document.querySelector('button');
button.onclick = hledejRecept;
let input = document.querySelector('#hledat');


function hledejRecept() {

    let hledanyRecept = input.value.toLowerCase();

    if (hledanyRecept === '') {
        alert('Vyhledávací pole je prázdné');
        //return
    }

    else {

        console.log(hledanyRecept);
        let nalezenyRecept = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hledanyRecept))

        console.log(nalezenyRecept);

        smazRecepty();
        function smazRecepty() {
            for (k = 0; k < recepty.length; k++) {

                document.querySelector('#recepty').removeChild(document.querySelector('.recept'));

            }
        }
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

