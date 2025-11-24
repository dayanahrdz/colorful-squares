window.onload=function(){
    var add= document.getElementById("add");
    add.onclick = addSquare;
    var colors = document.getElementById("colors");
    colors.onclick = changeColor;
    var squareCount = parseInt(Math.random() * 1000) + 30;
    for(let i = 0; i < squareCount; i++){
        addSquare();
    }
    
}
function getRandomColor(){
    var possibilities = "0123456789ABCDEF";
    var result="#";
    for(var i=0; i <6; i++)
    {
        result+=possibilities.charAt(parseInt(
            Math.random()*possibilities.length));
    }
    return result;
}

function addSquare(){
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement("div");
    newSquare.className="square";
    newSquare.style.left = parseInt(Math.random()* 651) +"px";
    newSquare.style.top = parseInt(Math.random()* 251) +"px";
    newSquare.style.backgroundColor = getRandomColor();
    squarearea.appendChild(newSquare); //append newSquare element will happen at the end
 
}

function changeColor(){
    var squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = getRandomColor();
    });
}

