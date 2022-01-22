// var hallo_knop = document.getElementById('hallo_knop');
var tekstvak = document.getElementById('tekstvak');
var tekstvak_rechts = document.getElementById('tekstvak-rechts');
var knoppen = document.getElementById('knoppen');



// var i = 0;
var hallo_reactie = 'Hoi, leuk dat je er bent.';
// var speed = 50;



function halloTekst() {
    tekstvak.innerHTML = "hallo";
    tekstvak_rechts.innerHTML = hallo_reactie;
    
    // tekstvak_rechts.innerHTML += hallo_reactie.charAt(i);
    // i++;
    // setTimeout(halloTekst, speed)
}

function hoe_gaat_het() {
    tekstvak.innerHTML = "Hoe gaat het?";
    tekstvak_rechts.innerHTML = 'Met mij gaat het goed, hoe gaat het met jou?'

    knoppen.innerHTML = "<button onclick='goed()'>Goed</button> <button onclick='slecht()'>Niet zo goed</button>";


}
function doeiTekst() {
    
    tekstvak.innerHTML = "doei";
    tekstvak_rechts.innerHTML = 'Doei, fijne dag verder.'
}

function ClearTekst() {

    tekstvak.innerHTML = '';
    tekstvak_rechts.innerHTML = '';

}

//  goed en slecht functie

function goed() {

    tekstvak.innerHTML = "Met mij gaat het ook goed";
    tekstvak_rechts.innerHTML = "mooi om te weten"

    knoppen.innerHTML = '<button id="hallo_knop" onclick="halloTekst()">Hallo</button><button id="hoe_gaat_het_knop" onclick="hoe_gaat_het()">Hoe gaat het?</button><button id="doei_knop" onclick="doeiTekst()">Doei</button><button onclick="ClearTekst()">Clear</button>'
}

function slecht() {

    tekstvak.innerHTML = "Met mij gaat het niet zo goed";
    tekstvak_rechts.innerHTML = "Wat vervelend voor je";

    knoppen.innerHTML = '<button id="hallo_knop" onclick="halloTekst()">Hallo</button><button id="hoe_gaat_het_knop" onclick="hoe_gaat_het()">Hoe gaat het?</button><button id="doei_knop" onclick="doeiTekst()">Doei</button><button onclick="ClearTekst()">Clear</button>'
}