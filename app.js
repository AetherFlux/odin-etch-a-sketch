const gameBoard = document.querySelector('#game-board');
const slider = document.querySelector('#set-cells');
const numberDisplay = document.querySelector('.number-display');

let createDiv = () => document.createElement('div');

let sliderValue = 16

slider.oninput = (e) => {
    sliderValue = e.target.value;
    console.log(sliderValue);
    setGrid();
    numberDisplay.innerHTML = `${sliderValue} x ${sliderValue}`
}

function setGrid() {
    //clear board
    while(gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    };
    //setup cells
    for (i = 0; i < sliderValue; i++){
        gameBoard.appendChild(createDiv());
        for (x = 0; x < sliderValue; x++){
            gameBoard.childNodes[i].appendChild(createDiv()).setAttribute('class', 'cell')
        }
    }
    const cells = document.querySelectorAll('.cell');
    //add event listerners to cells
    cells.forEach(cell => cell.addEventListener('mouseover', e => { 
        e.target.setAttribute('style', 'background-color: black');
    }));
}

setGrid()


//.appendChild(createDiv()).setAttribute('style', 'height: 20px; width: 20px')
