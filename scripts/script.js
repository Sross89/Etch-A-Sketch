let setting = 0;
let gridWidth = 750;
function createGrid(size){
    var grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = "repeat(" + size + ", " + gridWidth/size + "px)";
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.style.height = gridWidth/size + 'px';
        square.style.width = gridWidth/size + 'px';
        square.style.backgroundColor = 'gray';
        square.style.borderStyle = 'solid';
        square.style.borderWidth = '1px';
        square.style.borderColor = 'black';
        square.addEventListener(`mouseover`, function () {
            changeColor(square);
        });
        grid.appendChild(square);
    }
}

function changeColor(square){
    switch(setting){
        case 0:
            square.style.backgroundColor ="black";
            break;
        case 1:
            square.style.backgroundColor = getRandomColor();
            break;
    }
}

createGrid(20);

function getRandomColor(){
    var colorCode = "#"
    for (let i = 0; i < 6; i++) {
        // random chance at character or number
        let char = Math.floor(Math.random() * 2);
        switch(char){
            //case for number
            case 0:
                    char = Math.floor(Math.random() * 10); 
                break;
            
            //case for character
            case 1:
                char = String.fromCharCode(65 + Math.floor(Math.random() * 6))
                break;
        }
        colorCode += char;     
    }
    return colorCode;
}



document.getElementById("random").addEventListener("click", randomFunction);
document.getElementById("darken").addEventListener("click", darkenFunction);
document.getElementById("reset").addEventListener("click", resetFunction);
document.getElementById("confirm").addEventListener("click", confirmFunction);

function confirmFunction() {
    var size = document.getElementById("sizeForm").value;
    if(!isNaN(size)){
        var grid = document.getElementById('grid');
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        createGrid(size);
    }
    else{
        window.alert("Enter a valid number please");
    }
}

function randomFunction() {
    setting = 1;
}

function darkenFunction() {
    setting = 0;
}

function resetFunction() {
    var grid = document.getElementById('grid');
    var children = grid.children;
    for (let i = 0; i <children.length; i++) {
        var child = children[i];
        child.style.backgroundColor = "gray"
    }
}
