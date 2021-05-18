const fs = require("fs");
const path = require("path");

const newNote = (body, notesArr) => {
    const note = body;
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
}

const deleteNote = (id, notesArr) => {
    let deleteReq = notesArr;

    let index = deleteReq.findIndex(notes => notes.id === id);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: deleteReq }, null, 2)
    );
    return deleteReq;
}

module.exports = {newNote, deleteNote};