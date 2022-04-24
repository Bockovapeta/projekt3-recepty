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


for (let i = 0; i < recepty.length; i++) {

    let recept = document.createElement('div');
    recept.id = 'recept';
    recept.className = 'recept';

    let fotoReceptu = document.createElement('img');
    fotoReceptu.className = 'recept-obrazek';
    fotoReceptu.src = recepty[i].img;
    fotoReceptu.style.borderRadius = "5px";

    let nazevReceptu = document.createElement('h3');
    nazevReceptu.className = 'recept-info';
    nazevReceptu.innerHTML = recepty[i].nadpis;
    nazevReceptu.style.fontSize = "16px";


    recept.appendChild(fotoReceptu);
    recept.appendChild(nazevReceptu);



    document.querySelector('#recepty').appendChild(recept);







}














let vybranyRecept = document.querySelectorAll('#recept');



vybranyRecept.forEach((element) => {
    element.addEventListener('click', zobrazRecept);
});


function zobrazRecept(event) {

    console.log(event.target);

}

