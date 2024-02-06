const frame = document.querySelector('body');
const btn = document.createElement('button');

const grid = document.createElement('div');
frame.appendChild(btn);
frame.appendChild(grid);
btn.textContent="Grid Squares";
btn.addEventListener('click',() =>{
    let gridSize = prompt("Input # of grid squares");
    if(!isNaN(gridSize)) {
        while (grid.lastElementChild){
            grid.removeChild(grid.lastElementChild);
        }
        createGrid(gridSize);

    } else {alert("not a number")};
});
grid.style.display = "flex";
grid.style.width = "960px";
grid.style.height = grid.style.width;
grid.style.flexWrap = "wrap";
function createGrid(side){
    grid.style.flexWrap = side;
    for (let i=0;i<side*side;i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            console.log('hover');
        });
        square.style.height = square.style.width = (`${grid.offsetWidth/side}px`);
        grid.appendChild(square);

    }
}
createGrid(4);
console.log('hi');