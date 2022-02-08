

const blinkButtons = (req) => {
   switch(req){
      case 0 :
     const AnimationRed = document.getElementById('RButton')
     AnimationRed.classList.add('BlinkRed') 
      setTimeout( () => {
         AnimationRed.classList.remove('BlinkRed')
      },500)
      break;
      case 1 :
         const AnimationGreen = document.getElementById('GButton')
         AnimationGreen.classList.add('BlinkGreen') 
          setTimeout( () => {
             AnimationGreen.classList.remove('BlinkGreen')
          },500)
      break;
      case 2 :
         const AnimationBlue = document.getElementById('BButton')
         AnimationBlue.classList.add('BlinkBlue') 
          setTimeout( () => {
             AnimationBlue.classList.remove('BlinkBlue')
          },500)
      break;
      case 3 :
         const AnimationYellow = document.getElementById('YButton')
         AnimationYellow.classList.add('BlinkYellow') 
          setTimeout( () => {
             AnimationYellow.classList.remove('BlinkYellow')
          },500)
   }
}


const RandomNumber = () => {
   const Random = Math.floor( Math.random() * 4)
   return Random
}

var Rounds = 1


var sequence = new Array


const PushSequence = () => {
   const PartSeq = RandomNumber() //Sequence part
   sequence.push(PartSeq) 
   console.log(sequence)
}
const RenderSequenceGraphic = (FrameRender) => {

   blinkButtons(sequence[FrameRender])

}


var Process = {
   ON: 0 , 
   Type: [],
   Limit: sequence.length
}


function GameEngine () {
   let RenderGraphic 
   PushSequence()
   let RenderList = 0 
   RenderGraphic = setInterval( () => {
      console.log('RenderAnimations')
      RenderSequenceGraphic(RenderList)
      ++RenderList
   },750)
   setTimeout( () => {
      //RenderClicks Turn On
      clearInterval(RenderGraphic)
      Process.Type = []
      Process.ON = 1
   },750 * sequence.length)
   
}
// idk if this gonna be the better place to put an "ClassDataAnimation" but i think it gonna be sintaxic, what's quite good
const BorderAnimationsService = (refAct) => {
   switch(refAct){
         case '0' :
        const AnimationRed = document.getElementById('RButton')
        AnimationRed.classList.add('BorderRed') 
         setTimeout( () => {
            AnimationRed.classList.remove('BorderRed')
         },200)
         break;
         case '1' :
            const AnimationGreen = document.getElementById('GButton')
            AnimationGreen.classList.add('BorderGreen') 
             setTimeout( () => {
                AnimationGreen.classList.remove('BorderGreen')
             },200)
         break;
         case '2' :
            const AnimationBlue = document.getElementById('BButton')
            AnimationBlue.classList.add('BorderBlue') 
             setTimeout( () => {
                AnimationBlue.classList.remove('BorderBlue')
             },200)
         break;
         case '3' :
            const AnimationYellow = document.getElementById('YButton')
            AnimationYellow.classList.add('BorderYellow') 
             setTimeout( () => {
                AnimationYellow.classList.remove('BorderYellow')
             },200)
      }
}



const Verify = (part, similar) => {
   let Er = 0 //error
for(let k = 0 ; k < part.length ; ++k){// i use to use z y and x for variables on loopes but i use k now idk why 
if(part[k] != similar[k]){
   Er = 1
}
}
return Er
}

function RenderClicks (sender) {
if(Process.ON == 1){
   Process.Type.push(sender)
BorderAnimationsService(sender)

   if(Process.Type.length == sequence.length){
      Process.ON = 0
    const WinLose = Verify(Process.Type , sequence)
    if(WinLose == 0){
       console.log('Congratilations')
       ++Rounds
       document.getElementById("RunMatchAuto").innerText = `Actual Round = ${Rounds}`
       setTimeout( () => {
          GameEngine()
       },500)// just to inspect Bugs i explain better on the README.md
    }else{
      document.getElementById("RunMatchAuto").innerText = `U Lose but u survived till Round = ${Rounds}`
      setTimeout( () => {
         document.getElementById("RunMatchAuto").innerText = `Char Up U Can Get Better next time`
      },4000)
      setTimeout( () => {
         InitGame('RunMatchAuto')
      },6000)
    }
   }
}else{
   console.error("Click Received but not Processed __ProtocolGame: #000")
}
}