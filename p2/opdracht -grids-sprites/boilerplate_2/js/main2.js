
// ruitjes maken

for (var j = 0; j < 30; j++) {
  for (var i = 0; i < 50; i++) {
    document.getElementById("container-2").innerHTML += "<div class='cel'></div>";
  }
  document.getElementById("container-2").innerHTML += "<br>";
}

// kleuren laten werken

var clickeble = document.getElementsByClassName('cel')
for (var i = 0; i < clickeble.length; i++) {
  clickeble[i].addEventListener("click", function (event) {
    event.currentTarget.style.background = color;
  });
}

document.getElementById('blauw').addEventListener("click", function (event) {
  color = 'blue';
})
document.getElementById('rood').addEventListener("click", function (event) {
  color = 'red';
})
document.getElementById('groen').addEventListener("click", function (event) {
  color = 'green';
})
document.getElementById('paars').addEventListener("click", function (event) {
  color = 'purple';
})
document.getElementById('wit').addEventListener("click", function (event) {
  color = 'white';
})
document.getElementById('geel').addEventListener("click", function (event) {
  color = 'yellow';
})



