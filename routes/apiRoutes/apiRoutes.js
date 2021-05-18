const { newNote, deleteNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    let result = notes;
    return res.json(result);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();

    const note = newNote(req.body, notes);
    return res.json(note);
});

router.delete("/notes/:id", (req, res) => {

    let query = req.params.id;

    const result = deleteNote(query, notes);
    return res.json(result);
});

module.exports = router;