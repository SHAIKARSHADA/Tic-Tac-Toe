let button = document.querySelectorAll(".button");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 1;
let turn0 = true;
const winPattern = [[0,3,6],[0,1,2],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[6,7,8],[2,5,8]]


const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 1;
}



button.forEach((box) => {
    box.addEventListener("click", () => {
      if(turn0) {
        box.innerText = "X";
        turn0 = false;

        console.log(count)
      } else {
        box.innerText = "O";
        turn0 = true;

        console.log(count)
      } 
      checkWinner();
     
      if (count == 9){
        msg.innerText =  `It is an DRAW!!!`;
        msgContainer.classList.remove("hide");
        count = 0;
      }
      
      box.disabled = true;
     
  
      count++;
 })
})

const enableBoxes = () => {
  for(let box of button) {
    box.disabled = false;
    box.innerText="";
  }
}

const disableBoxes = () => {
  for(let box of button) {
    box.disabled = true;
  }
}

const showWinner = (winner) => {
  msg.innerText =  `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = button[pattern[0]].innerText;
    let pos2Val = button[pattern[1]].innerText;
    let pos3Val = button[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if(pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);