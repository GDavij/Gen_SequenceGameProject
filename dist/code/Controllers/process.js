"use strict";
// Functions that does not impact the Game Interface
function add_sequence(seq) {
    const new_seq = seq;
    new_seq.push(Math.floor(Math.random() * 4));
    //  console.log(new_seq)
    return new_seq;
}
function listen_user_sequence(query) {
    const buttons_id = ['Red', 'Yellow', 'Blue', 'Green'];
    for (const bt_id of buttons_id) {
        const bt = document.getElementById(bt_id);
        if (query === 1) {
            bt.disabled = false;
        }
        else {
            bt.disabled = true;
        }
    }
}
function process_sequence_equality(base_seq, user_seq) {
    let check_okay = 1;
    for (let check_run = 0; check_run < base_seq.length; ++check_run) {
        if (base_seq[check_run] != user_seq[check_run]) {
            check_okay = 0;
        }
    }
    return check_okay;
}
