const {notes} = require("./db/db.json");
const {newNote, deleteNote} = require("./lib/notes");
const {v4: uuidv4} = require("uuid");

const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static('public'));

app.get("/api/notes", (req, res) => {
    let result = notes;
    return res.json(result);
});

app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();

    console.log(req.body);

    const note = newNote(req.body, notes);
    return res.json(note);
})

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});