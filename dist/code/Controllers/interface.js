"use strict";
// Functions that does exclusively impact on game interface 
function message_player(txt) {
    const msg_interface = document.getElementById("MessageUser");
    msg_interface.textContent = txt;
    // console.log("Text Add")
    msg_interface.classList.add('PushMsg');
    setTimeout(() => {
        msg_interface.textContent = "";
        //    console.log("Text Removed")
        msg_interface.classList.remove('PushMsg');
    }, 2000);
    /* IDK yet Why i use 2100s as SetTimeout
     for use various times this Function, Really i will apure this later*/
}
const render_color_seq = (color) => {
    const button = document.getElementById("SequenceOut");
    switch (color) {
        case 0: // Red
            button.classList.add("SequenceRed");
            setTimeout(() => {
                button.classList.remove("SequenceRed");
            }, 1000);
            break;
        case 1: // Yellow
            button.classList.add("SequenceYellow");
            setTimeout(() => {
                button.classList.remove("SequenceYellow");
            }, 1000);
            break;
        case 2: // Blue
            button.classList.add("SequenceBlue");
            setTimeout(() => {
                button.classList.remove("SequenceBlue");
            }, 1000);
            break;
        case 3: // Green
            button.classList.add("SequenceGreen");
            setTimeout(() => {
                button.classList.remove("SequenceGreen");
            }, 1000);
            break;
    }
};
function render_sequence(sequence) {
    let count = 0;
    const interval = setInterval(() => {
        render_color_seq(sequence[count]);
        ++count;
        //   console.log("Rendering")
        if (count === sequence.length) {
            clearInterval(interval);
        }
    }, 1100);
}
function generate_game_screen(instance) {
    const screen = document.querySelector("#Game");
    if (instance === 1) {
        screen.textContent = "";
        const game_screen = document.createElement("div");
        game_screen.id = "GameScreen";
        game_screen.innerHTML = `
        <div class="Line"> 
        <button id="Red" class="GameButton" disabled onclick="send_sequence(0)">Red</button>
        <button id="Yellow" class="GameButton" disabled onclick="send_sequence(1)">Yellow</button>
        </div>
        <div id="SequenceOut">Sequence</div>
        <div class="Line"> 
        <button id="Blue" class="GameButton" disabled onclick="send_sequence(2)">Blue</button>
        <button id="Green" class="GameButton" disabled onclick="send_sequence(3)">Green</button>
        </div>
        `;
        screen.append(game_screen);
    }
    else {
        screen.children[0].remove();
        screen.textContent = "Waiting for Game to Start";
    }
}
const render_blink_color = (color) => {
    const button_ids = ['Red', 'Yellow', 'Blue', 'Green'];
    const button = document.getElementById(button_ids[color]);
    switch (color) {
        case 0: // Red
            button.classList.add("BlinkRed");
            setTimeout(() => {
                button.classList.remove("BlinkRed");
            }, 100);
            break;
        case 1: // Yellow
            button.classList.add("BlinkYellow");
            setTimeout(() => {
                button.classList.remove("BlinkYellow");
            }, 100);
            break;
        case 2: // Blue
            button.classList.add("BlinkBlue");
            setTimeout(() => {
                button.classList.remove("BlinkBlue");
            }, 100);
            break;
        case 3: // Green
            button.classList.add("BlinkGreen");
            setTimeout(() => {
                button.classList.remove("BlinkGreen");
            }, 100);
            break;
    }
};
