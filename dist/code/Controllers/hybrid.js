"use strict";
// Functions that Impact the Game Interface and don't at same time
function change_game_state_on(game_state_on) {
    if (game_state_on === 0) {
        game_state_on = 1;
        engine.msg_player("Loading Game");
        controll_button.textContent = "Wait Please";
    }
    else {
        game_state_on = 0;
        engine.msg_player("Ending Game");
        controll_button.textContent = "Wait Please";
    }
    return game_state_on;
}
