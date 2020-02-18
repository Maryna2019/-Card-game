let data = initData();
const rootNode = document.getElementById('root');

rootNode.innerHTML = drawBoard();

function initData() {
    let result = [];
    for(let i = 0; i < 7; i++) {
        result[i] = [];
        for(let j = 0; j < 6; j++) {
            result[i][j] = Math.floor(Math.random() * 4);
        }
    }
    return result;
}

function drawBoard() {

    let result = '<ul>';

    
    for (let i = 0; i < data.length; i++) {
        result += `<li>
                        <ul>`
          
        for(let j = 0; j < data[i].length; j++) {
            let cardIcon = '';
            switch (data[i][j]) {
                case 0:
                    cardIcon = '&#9827';
                break;
                case 1:   
                    cardIcon = '&#9824';                 
                break;
                case 2:
                    cardIcon = '&#9825;';
                break;
                case 3:
                    cardIcon = '&#9826;';
                break;
                case -1:
                    cardIcon = '';
                break;
              }

            result += `<li onclick = 'markAndRemoveCard(${i}, ${j})'>${cardIcon}</li>`
        }              

        result += ` </ul>
                    </li>`;  
    }

    return result;
} 

function markAndRemoveCard(indexRow, indexCol) {
    let chooseCard = data[indexRow][indexCol];

    if(chooseCard === -1) {
        return;
    }

    data[indexRow][indexCol] = -1;

    //top card
    if(indexRow !== 0 && chooseCard === data[indexRow - 1][indexCol]){
        markAndRemoveCard(indexRow - 1, indexCol)
    }

    //right card
    if(indexCol !== 5 && chooseCard === data[indexRow][indexCol + 1]){
        markAndRemoveCard(indexRow, indexCol + 1)
    }

    //bottom card
    if(indexRow !== 6 && chooseCard === data[indexRow + 1][indexCol]){
        markAndRemoveCard(indexRow + 1, indexCol)
    }

    //left card
    if(indexCol !== 0 && chooseCard === data[indexRow][indexCol - 1]){
        markAndRemoveCard(indexRow, indexCol - 1)
    }

    rootNode.innerHTML = drawBoard();
}
