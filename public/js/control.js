

function InitGame(id) {
   const Button = document.getElementById(id)
if(Button.textContent == "Start Match"){
   Button.textContent = "Loading..."
   Button.disabled = true
   document.getElementById("InteractiveStructure").textContent = "Match is About to Start"
   document.getElementById("InteractiveStructure").classList.add("PushMessage")
   setTimeout( () => {
      Button.disabled = false
      GenerateGame()
      Button.textContent = "GiveUp"
   document.getElementById("InteractiveStructure").textContent = ""
   document.getElementById("InteractiveStructure").classList.remove("PushMessage")
   },6000)
}else{
   Button.textContent =  "Loading..."
   Button.disabled = true
   document.getElementById("InteractiveStructure").textContent = "Match is About to End"
   document.getElementById("InteractiveStructure").classList.add("PushMessage")
   setTimeout( () => {
      Button.disabled = false
      EraseGame()
      Button.textContent = "Start Match"
   document.getElementById("InteractiveStructure").textContent = ""
   document.getElementById("InteractiveStructure").classList.remove("PushMessage")
   },6000)
}
}

