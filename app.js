const gameBoard = document.querySelector('#game-board');

let createDiv = () => document.createElement('div');

for (i = 0; i < 16; i++){
    gameBoard.appendChild(createDiv());
    for (x = 0; x < 16; x++){
        gameBoard.childNodes[i].appendChild(createDiv()).setAttribute('style', 'height: 20px; width: 20px; background-color: black')
    }
}

console.log(gameBoard.childNodes.length);

//.appendChild(createDiv()).setAttribute('style', 'height: 20px; width: 20px')
