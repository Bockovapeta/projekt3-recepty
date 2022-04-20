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
    let novyRecept = document.createElement('div');

    novyRecept.className = 'recept';

    let fotoReceptu = document.createElement('img');
    fotoReceptu.className = 'recept-obrazek';
    fotoReceptu.src = recepty[i].img;
    fotoReceptu.style.borderRadius = "5px";

    let nazevReceptu = document.createElement('h3');
    nazevReceptu.className = 'recept-info';
    nazevReceptu.innerHTML = recepty[i].nadpis;
    nazevReceptu.style.fontSize = "16px";

    novyRecept.appendChild(fotoReceptu);
    novyRecept.appendChild(nazevReceptu);

    document.querySelector('#recepty').appendChild(novyRecept);

}




/*

poleRecepty.forEach((recept) => {
    recept.addEventListener('click', zobrazRecept);
});

function zobrazRecept(udalost) {
    let obrazek = udalost.target;
    let kalorie = obrazek.dataset.kalorie;

}
*/