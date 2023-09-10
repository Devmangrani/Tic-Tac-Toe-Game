const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");
let currentPlayer;
let gameGrid;
const winningpositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 
function initGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    boxes.forEach((box, index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
};
initGame();
function swapTrun(){
    if (currentPlayer === "X") {
        currentPlayer ="0";
    }
    else{
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current player - ${currentPlayer}`;
}
boxes.forEach((box, index) => {
    box.addEventListener("click" , () =>{
        handleClick(index);
    })
});
function checkGameOver(){
    let answer = "";
    winningpositions.forEach((position) => {
        if((gameGrid[position[0]]!== "" || gameGrid[position[0]]!== "" || gameGrid[position[0]]!== "" ) && (gameGrid[position[0]]===gameGrid[position[1]]) && (gameGrid[position[1]]===gameGrid[position[2]])) {
            if (gameGrid[position[0]] ==="X") 
                answer = "X";
            else
                    answer = "0";
            boxes.forEach((box) =>{
                box.style.pointerEvents = "none";
            })
                

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    if (answer !== "") {
        gameInfo.innerText = `winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }
    let fillcount = 0;
    gameGrid.forEach((box) => {
        if (box !== "") {
            fillcount++;
        }
    });
    if(fillcount === 9){
        gameInfo.innerText ="Game Tied!";
        newGameBtn.classList.add("active");
    }
};
function handleClick(index){
    if (gameGrid[index] === "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapTrun();
        checkGameOver();
    }
};
newGameBtn.addEventListener("click" , initGame);