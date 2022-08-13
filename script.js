let color = "black";
let click = false; 

function populateBoard(size)
{
    let container = document.querySelector(".grid-container");
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for(let i = 0; i<amount; i++)
    {
        let grid = document.createElement("div");
        grid.classList.add("grids");
        grid.addEventListener("mouseover", colorSquare);
        grid.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", grid);
    }
}

populateBoard(16);

function changeSize(input)
{
    if (input >= 2 && input <= 100)
    {
        populateBoard(input);
    }
    else
    {
        console.log("Please choose a number between 2 and 100!");
    }
}

function colorSquare(){
    if (click === true)
    {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

function random(){
    let randomColor;
    let x = Math.floor((Math.random() * 3) + 1);
    if (x === 1)
    {
        randomColor = "blue";
    }
    else if (x === 2)
    {
        randomColor = "red";
    }
    else
    {
        randomColor = "green";
    }
    return randomColor;
}

function reset(){
    let grid = document.querySelectorAll(".grids");
    grid.forEach((grid) => grid.style.backgroundColor = "white");
}

document.querySelector("body").addEventListener("click", () => {
    click = !click;
})