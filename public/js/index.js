
const GameInner = document.getElementById("Game")

const GenerateGame = () => {
   const LINES = [
      `<div class="GameLine">
      <button id="RButton" class="GameButtons" onclick="RenderClicks('0')">
      Red
      </button>
      <button id="GButton" class="GameButtons" onclick="RenderClicks('1')">
      Green
      </button> 
      </div>`
      
      ,

      `<div class="GameLine">
      <button id="BButton" class="GameButtons" onclick="RenderClicks('2')">
      Blue
      </button>
      <button id="YButton" class="GameButtons" onclick="RenderClicks('3')">
      Yellow
      </button> 
      </div>`
   ]
for(let z = 0 ; z < 2 ; ++z){
GameInner.innerHTML += LINES[z]
}
setTimeout( () => {
   GameEngine() // Ignite Game
}, 500)
}
const EraseGame = () => {
Rounds = 0 
sequence = new Array
Process = {
   ON: 0 , 
   Type: [],
   Limit: sequence.length
}
GameInner.innerHTML = ""
sequence = []
}