// General Control of the Game 

var sequence:Array<any> = []

var game_state_on = 0

const controll_button = document.getElementById("GameRun") as HTMLButtonElement

controll_button.addEventListener('click', () => {
    controll_button.disabled = true
   game_state_on =  change_game_state_on(game_state_on)

   setTimeout(() => {
       engine.msg_player("Generating Game")
       engine.generate_game(1)
       //Sequence Init 
       sequence = engine.add_seq(sequence)
       setTimeout(() => {
           
           engine.msg_player(`Going to Round ${sequence.length}`)
           controll_button.textContent = `Round ${sequence.length}`
           setTimeout(() => {
               engine.msg_player("Listen to the Sequence")
               setTimeout(() => {
                   engine.render_seq(sequence)
                   setTimeout(() => {
                      // console.log("Now we Continue")
                       engine.msg_player("What is the Sequence")
                       setTimeout(() => {
                           controll_button.textContent = "Listening"
                           //Disabled Buttons = False (Here i Stop )
                           engine.listen_user(1)
                       },2000)
                   },(1300 * sequence.length))
               },2000)
            },2000)
            
        },2000)
   },2000)
})

function continue_game () {
    sequence = engine.add_seq(sequence)
        engine.msg_player(`Going to Round ${sequence.length}`)
        controll_button.textContent = `Round ${sequence.length}`
        setTimeout(() => {
            engine.msg_player("Listen to the Sequence")
            setTimeout(() => {
                engine.render_seq(sequence)
                setTimeout(() => {
                    //console.log("Now we Continue")
                    engine.msg_player("What is the Sequence")
                    setTimeout(() => {
                        controll_button.textContent = "Listening"
                        //Disabled Buttons = False (Here i Stop )
                        engine.listen_user(1)
                    },2000)
                },(1100 * sequence.length))
            },2000)
         },2000)
}




var user_res_seq:Array<any> = []
function send_sequence (send_seq:number) {//After Start Loop Function
console.log("%cSendClick","color:#a0f;")
user_res_seq.push(send_seq)
engine.render_blink(send_seq)

if(user_res_seq.length === sequence.length){
    engine.listen_user(0)
  //  console.log("Sequence Aquired, Preparing to check")
    engine.msg_player("Checking Sequence")
    controll_button.textContent = "Wait Please"
  const integrity_seq =  engine.process_seq(sequence, user_res_seq)
  user_res_seq = [] // Clear Sends 
    setTimeout(()=> {
        if(integrity_seq === 1){
            engine.msg_player("Sequence Correct")
            setTimeout(()=> {
                continue_game()
            },2000)
        }
        else{
            engine.msg_player("Sequence Incorrect")

            setTimeout(() => {
                engine.msg_player("Well Played")
                setTimeout(()=> {
                    game_state_on = engine.change_state(game_state_on)
                    engine.generate_game(0)
                    sequence = []
                    setTimeout(() => {
                        controll_button.disabled = false
                        controll_button.textContent = "Start Match"
                    },2000)
                },2000)
            },2000)
        }
    },2000)
}

}