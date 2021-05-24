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
    notesArr.splice(id, 1);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    return notesArr;
};

module.exports = {newNote, deleteNote};