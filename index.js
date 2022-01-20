// Index JS V: 0.1
var Wait = true
console.log("So U Entered on Console? i Wonder why do u do that ?.. That's Okay Have Fun")
setTimeout(() => {
    document.querySelector("#B_Red").classList.remove("B_RedBlink")
    document.querySelector("#B_Green").classList.remove("B_GreenBlink")
    document.querySelector("#B_Blue").classList.remove("B_BlueBlink")
    document.querySelector("#B_Yellow").classList.remove("B_YellowBlink")
    document.querySelector("#Init_Clear").disabled = false
    document.querySelector("#Init_Clear").innerText = "Start Match"
    Wait = false
}, 1000)
const BlinkRed = () => {
    document.querySelector("#B_Red").classList.add("B_RedBlink")
    setTimeout( ()=>{
        document.getElementById("B_Red").classList.remove("B_RedBlink")
    },1000)
}
const BlinkGreen = () => {
    document.querySelector("#B_Green").classList.add("B_GreenBlink")
    setTimeout( ()=>{
        document.getElementById("B_Green").classList.remove("B_GreenBlink")
    },1000)
}
const BlinkBlue = () => {
    document.querySelector("#B_Blue").classList.add("B_BlueBlink")
    setTimeout( ()=>{
        document.getElementById("B_Blue").classList.remove("B_BlueBlink")
    },1000)
}
const BlinkYellow = () => {
    document.querySelector("#B_Yellow").classList.add("B_YellowBlink")
    setTimeout( ()=>{
        document.getElementById("B_Yellow").classList.remove("B_YellowBlink")
    },1000)
}
const ReadData = (Data2Read) => {
        switch (Data2Read) {
            case 0: BlinkRed()
                break;
            case 1: BlinkGreen()
                break;
            case 2: BlinkBlue()
                break;
            case 3: BlinkYellow()
                break;
        }
}
const RandomizeData = () => {
    const Randomize = Math.floor(Math.random() * 4)
    return Randomize
}
var ResponseOn = 0
var gameInit = 0
var Datas = new Array
var Round = Number(document.getElementById("Steps").value)
function StartGame() {
    if (gameInit == true) {
        const Steps2 = Number(document.querySelector("#Steps").value)
        document.querySelector(`#Init_Clear`).innerText = "Renderizing, Listen time"
        for (let z = 0; z < Steps2; ++z) {
            Datas.push(RandomizeData())
        }
       // console.log(Datas)
        let y = 0
        setInterval( () => {
            ReadData(Datas[y])
            y = y + 1
        },1100)
        setTimeout( () => {
        document.querySelector("#B_Red").disabled = false
        document.querySelector("#B_Green").disabled = false
        document.querySelector("#B_Blue").disabled = false
        document.querySelector("#B_Yellow").disabled = false
        document.querySelector(`#Init_Clear`).innerText = "Time To Mark"
    },1100 * Datas.length + 1000)
    }
}
const GameReqs = document.querySelector("#Init_Clear").addEventListener('click', (ev) => {
    Round = Number(document.getElementById("Steps").value)
    if (Wait == false) {
        if (ev.target.name == 'Starts') {
            ev.target.name = 'Ends'
            document.querySelector(`#${ev.target.id}`).innerText = "End Match"
            document.querySelector("#GameStatus").innerText = "Started, on Round =>"
            document.querySelector("#Round").innerText = String(Round)
            gameInit = 1
            document.querySelector("#Steps").disabled = true
            StartGame()
        } else {
            ev.target.name = 'Starts'
            document.querySelector(`#${ev.target.id}`).innerText = "Start Match"
            document.querySelector("#GameStatus").innerText = "Endend, On Preparing"
            document.querySelector("#Round").innerText = ""
            gameInit = 0
            Datas = new Array
            Round = 1
            document.querySelector("#Steps").disabled = false
        }
    } else {
        console.log("Wait Please it's Fast, it's 1000Ms or 1 Second, oh u opened the console Hello")
    }
})
var ResponseCount = 0, ResponseArray = new Array
const MarkRed = () => {
    document.querySelector("#B_Red").classList.add("MarkRed")
    setTimeout( ()=>{
        document.getElementById("B_Red").classList.remove("MarkRed")
    },200)
}
const MarkGreen = () => {
    document.querySelector("#B_Green").classList.add("MarkGreen")
    setTimeout( ()=>{
        document.getElementById("B_Green").classList.remove("MarkGreen")
    },200)
}
const MarkBlue = () => {
    document.querySelector("#B_Blue").classList.add("MarkBlue")
    setTimeout( ()=>{
        document.getElementById("B_Blue").classList.remove("MarkBlue")
    },200)
}
const MarkYellow = () => {
    document.querySelector("#B_Yellow").classList.add("MarkYellow")
    setTimeout( ()=>{
        document.getElementById("B_Yellow").classList.remove("MarkYellow")
    },200)
}
function ResOnOn(mark) {
    document.querySelector("#B_Red").disabled = true
    document.querySelector("#B_Green").disabled = true
    document.querySelector("#B_Blue").disabled = true
    document.querySelector("#B_Yellow").disabled = true
    setTimeout( () => {
    switch (mark) {
        case 0: MarkRed()
            break;
        case 1: MarkGreen()
            break;
        case 2: MarkBlue()
            break;
        case 3: MarkYellow()
            break;
    }
    ResponseArray.push(mark)
    document.querySelector("#B_Red").disabled = false
    document.querySelector("#B_Green").disabled = false
    document.querySelector("#B_Blue").disabled = false
    document.querySelector("#B_Yellow").disabled = false
    try{
        let GotIt = 0
    if(ResponseArray.length == Datas.length){
        console.log(ResponseArray , "[" + Datas + "]" + " Oh so.. Do u Wanna see what had u Mistake ?, Here is")
        document.querySelector("#B_Red").disabled = true
        document.querySelector("#B_Green").disabled = true
        document.querySelector("#B_Blue").disabled = true
        document.querySelector("#B_Yellow").disabled = true
        for(let x = 0 ; x < Datas.length  ; ++x){
            if(ResponseArray[x] == Datas[x]){
                GotIt = 1
            }else{
                GotIt = 0
                throw new Error("U Error That Question, No Problem Try Again, Never Give Up ")
            }
        }
        if(GotIt = true){
        Round = Round + Number(document.getElementById("Steps").value)
        document.getElementById("Round").innerText = Round
        ResponseArray = new Array
        document.querySelector(`#Init_Clear`).innerText = " You Got into the next Round Wait Please"
        setTimeout( () => {
            StartGame()
        },1500)
        }
    }
}catch(er){
    console.error(er)
    document.querySelector(`#Init_Clear`).innerText = "You Lose , u can do better next"
    setTimeout( () => {
    document.querySelector(`#Init_Clear`).name = "Starts"
    document.querySelector(`#Init_Clear`).innerText = "Start Match"
    document.querySelector("#GameStatus").innerText = "Endend, On Preparing"
    document.querySelector("#Round").innerText = ""
    gameInit = 0
    GotIt = 0
    Datas = new Array
    Round = Number(document.getElementById("Steps").value)
    ResponseArray = new Array
    ResponseCount = 0
    document.querySelector("#Steps").disabled = false
},3000)
}
},200)
}