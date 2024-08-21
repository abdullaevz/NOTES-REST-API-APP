import { Router } from "express";
import { allNotes, allNotesById } from "../services/allNotes.js";
import { createNotes } from "../services/createNote.js";
import { updateNotes } from "../services/updateNotes.js";
import { deleteNotes } from "../services/deleteNotes.js";

export const appRouter = new Router();


//GET REQUESTS
appRouter.get("/", (req, res) => {
    res.send(
        "This is a home page, \n To see all notes get to: /notes \n To see notes by id just type : /notes/id"
    );
});
appRouter.get("/notes", allNotes);
appRouter.get("/notes/:id", allNotesById);


//POST REQUESTS
appRouter.post("/create-notes/", createNotes);

//PATCH REQUESTS
appRouter.patch("/update-notes/:id", updateNotes);

//DELETE REQUESTS
appRouter.delete("/delete-notes/:id", deleteNotes)