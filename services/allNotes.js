import express from "express";
import mongoose from "mongoose";
import { notesModel } from "../database/models.js";
import { ObjectId } from "bson";

export const allNotes = async (req, res) => {
    const notes = await notesModel.find()
    if (notes.length === 0) {
        res.send("not found any notes , to create it send post to /create-notes");

    } else {
        res.send(notes)
    }

}

export const allNotesById = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await notesModel.findOne({ _id: id });
        res.send(note);
    } catch (error) {
        res.json({ message: "not found any notes with this id" });
    }
}