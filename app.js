const gameBoard = document.querySelector('#game-board');

let createDiv = () => document.createElement('div');

for (i = 0; i < 16; i++){
    gameBoard.appendChild(createDiv());
    for (x = 0; x < 16; x++){
        gameBoard.childNodes[i].appendChild(createDiv()).setAttribute('class', 'cell')
    }
}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('mouseover', e => { 
    e.target.setAttribute('style', 'background-color: black');
}));


//.appendChild(createDiv()).setAttribute('style', 'height: 20px; width: 20px')
