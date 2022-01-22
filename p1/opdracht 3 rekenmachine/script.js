let scherm = document.getElementById("scherm");
let knoppen = document.getElementsByTagName("button");


for (let i = 0; i < knoppen.length; i++) {
    let knop = knoppen[i];
    knop.addEventListener("click", knopGeklikt);
    // knop.addEventListener("click", mouseOver);
}

function knopGeklikt(event) {

    switch (event.currentTarget.id) {
        case "nul":
            scherm.value += "0";
            break;
        case "een":
            scherm.value += "1";
            break;
        case "twee":
            scherm.value += "2"
            break;
        case "drie":
            scherm.value += "3"
            break;
        case "vier":
            scherm.value += "4"
            break;
        case "vijf":
            scherm.value += "5"
            break;
        case "zes":
            scherm.value += "6"
            break;
        case "zeven":
            scherm.value += "7"
            break;
        case "acht":
            scherm.value += "8"
            break;
        case "negen":
            scherm.value += "9"
            break;
            // operators
        case "leeg":
            scherm.value = ""
            break;
        case "plus":
            scherm.value += "+"
            break;
        case "keer":
            scherm.value += "*"
            break;
        case "delen":
            scherm.value += "/"
            break;
        case "punt":
            scherm.value += "."
            break;
        case "min":
            scherm.value += "-"
            break;
        case "uitkomst":
            scherm.value = eval(scherm.value)
            break;
        case "min":
            scherm.value += "-"
            break;
    }
}


// function mouseOver(){
//     document.getElementsByTagName("button").style.color = "red";

// }


