// var platforms = document.getElementById("platforms");
// var releasedate = document.getElementById("releasedate");
// var title = document.getElementById("title");
// var genre = document.getElementById("genre");
// var price = document.getElementById("price");
// var studio = document.getElementById("studio");

var terug = document.getElementById("terug"); 
var volgende = document.getElementById("volgende");
// 
var objectData;

var objectTitle = document.querySelector("#container #titel");
var objectGenre = document.querySelector("genre");
var objectPrice = document.querySelector("prijs");

console.log("hallo")


function loadData()
{
    fetch("playedgames.json")
    .then(response => response.json())
    .then(data => init(data));
}

function init(){
    objectData = data;
    console.log(objectData)
}

function terug(){
    
}

function verder(){
    
}

function toonObject(){
    
}

loadData()