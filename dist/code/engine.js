"use strict";
// Centralize Functions for game in 'engine'
const engine = new class Engine {
    //Contruct
    constructor() {
        //Interfaces
        this.msg_player = message_player;
        this.generate_game = generate_game_screen;
        this.render_seq = render_sequence;
        this.render_blink = render_blink_color;
        //Hybrid
        this.change_state = change_game_state_on;
        //Process
        this.add_seq = add_sequence;
        this.listen_user = listen_user_sequence;
        this.process_seq = process_sequence_equality;
    }
};
