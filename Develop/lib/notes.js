const fs = require("fs");
const path = require("path");

const newNote = (body, notesArr) => {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    return note;
}

const deleteNote = (id, notesArr) => {
    let update = notesArr;
    let index = update.findIndex(notes => notes.id === id);

    update = update.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: update}, null, 2)
    );
    return update;
}

module.exports = {newNote, deleteNote};