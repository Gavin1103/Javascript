/*  Hier komt de Javascript Code van de Game
    In de klas bouwen we klassikaal de startup code
    Aan jou de taak om de game verder uit te bouwen met:
    - bij elke crash moet de auto een andere afbeelding inladen waarin hij meer beschadigd is 
    (sla zelf nieuwe plaatjes op van de auto waarin je deze bewerkt)
    - De crash-score moet in beeld komen te staan

    Verdieping:
    Plaats een 2e auto, en bestuur deze met de W, S, A, D toetsen van je toetsenbord
    Als de 2 autos tegen elkaar rijden volgt er een explosie
*/

var crashCounter = 0;
var trees;
var teller = document.getElementById('teller');
// var auto = document.getElementById('auto');
// var car = document.getElementById('car');
car.style.left = 0;
car.style.top = 0;
CarcanDrive = true

function change() {
    car.src = 'assets/img/kingdino.jpg';
}

function change2() {
    car.src = 'assets/img/auto.jpg';
}

for (let index = 0; index < 5; index++) {
    var img = document.createElement('img');
    img.src = 'assets/img/tree.jpg';
    img.className = 'tree';
    img.style.left = Math.random(80) * 80 + '%';
    img.style.top = Math.random(80) * 80 + '%';
    document.getElementById('container').appendChild(img);

}

document.body.onkeydown = function (event) {
    if (CarcanDrive) {
        var e = event.keyCode;

        switch (e) {

            case 40: //down
                car.style.transform = 'rotate(90deg)'
                car.style.top = (parseInt(car.style.top)) + 20 + 'px';
                if (crash() == true) {
                    car.style.top = (parseInt(car.style.top)) - 20 + 'px';
                }
                break;

            case 37: //left
                car.style.transform = 'rotate(180deg)'
                car.style.left = (parseInt(car.style.left)) - 20 + 'px';
                if (crash() == true) {
                    car.style.left = (parseInt(car.style.left)) + 20 + 'px';
                }
                break;

            case 39: //right
                car.style.transform = 'rotate(0deg)'
                car.style.left = (parseInt(car.style.left)) + 20 + 'px';
                if (crash() == true) {
                    car.style.left = (parseInt(car.style.left)) - 20 + 'px';
                }
                break;

            case 38: //top
                car.style.transform = 'rotate(-90deg)'
                car.style.top = (parseInt(car.style.top)) - 20 + 'px';
                if (crash() == true) {
                    car.style.top = (parseInt(car.style.top)) + 20 + 'px';
                }
                break;
        }
    }
}

function crash() {
    trees = document.getElementsByClassName('tree')
    var overlap = false;
    for (let index = 0; index < trees.length; index++) {

        overlap = !(car.getBoundingClientRect().right < trees[index].getBoundingClientRect().left ||
            car.getBoundingClientRect().left > trees[index].getBoundingClientRect().right ||
            car.getBoundingClientRect().bottom < trees[index].getBoundingClientRect().top ||
            car.getBoundingClientRect().top > trees[index].getBoundingClientRect().bottom);

        if (overlap) {
            crashCounter += 1;
            teller.innerHTML = crashCounter;
            if (crashCounter >= 10) {
                change()
            }
            if (crashCounter >= 20) {
                change2()
            }
            if (crashCounter >= 30) {
                car.src = 'assets/img/auto2.jpg'
            }
            if (crashCounter >= 40) {
                CarcanDrive = false;
                teller.innerHTML = 'Game Over'
            }
            return true;
        }
    }
    return overlap;
}
// AABB collision detection