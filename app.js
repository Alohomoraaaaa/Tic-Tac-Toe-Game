let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let newGame = document.querySelector('#new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn0= true; //playerX,playerO
 
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true; 
    enableBoxes();
    msgcontainer.classList.add('hide');
}
boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turn0){
          box.innerText = "O";
          turn0 = false;
        }
        else{
          box.innerText = "X";
          turn0 = true;
        }
        box.disabled= true;
        checkWin();
    });
});

const disableBoxes = () => {
   for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgcontainer.classList.add('hide');
};

const showWinner = (winner) => {
    msg.innerText = `${winner} has won!`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
}

const checkWin = () => {
    for (let pattern of winpatterns) {
        let pval1 = boxes[pattern[0]].innerText;
        let pval2 = boxes[pattern[1]].innerText;
        let pval3 = boxes[pattern[2]].innerText;
        if (pval1 != "" || pval2 != "" || pval3 != "") {
            if( pval1 === pval2 && pval2 === pval3) {
               console.log("Winner is: ", pval1);
               showWinner(pval1);
            }
        }
    };
}

newGame.addEventListener('click', () => {
    resetGame();
});
resetBtn.addEventListener('click', () => {
    resetGame();
});