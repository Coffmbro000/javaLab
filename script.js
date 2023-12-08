function changeColor(squareId){
    var square = document.getElementById(squareId)
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

function getRandomColor(){
    var letters='0123456789ABCDEF';
    var color='#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;

}
function flashColors(){
    var flashList=querySelectorAll(".flash");
    console.log(flashList);
    flashList.forEach(function(flash) {
        var randomColor=randomColor();
        flash.style.backgroundColor=randomColor;
    });
    
}
setInterval(flashColors,100);

