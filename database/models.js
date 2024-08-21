import { model, Schema } from "mongoose";


const usersSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    email: String,
    password: String
}, { versionKey: false });

const notesSchema = new Schema({
    username: String,
    title: String,
    description: String
}, { versionKey: false});

export const usersModel = model("users", usersSchema);
export const notesModel = model("notes", notesSchema)
