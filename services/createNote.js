import { notesModel } from "../database/models.js";
import { checkData } from "./checkData.js";


export const createNotes = (req, res) => {
    const { username, title, description } = req.body;
    if (checkData(req)) {
        notesModel.create({
            username,
            title,
            description
        }).then(()=>{
            res.send("Note succesfully created !")
        });
    } else {
        res.send("Enter valid data !")
    }

}