import { notesModel } from "../database/models.js";
import { checkUpdateData } from "./checkData.js";

export const updateNotes = (req, res) => {
    const { username, title, description } = req.body;
    const { id } = req.params;
    if (checkUpdateData(req)) {
        notesModel.findByIdAndUpdate({ _id: id }, req.body).then(() => {
            res.send("Note succesfully updated")
        }).catch(() => {
            res.send("cannot find this note")
        });

    } else {
        res.send("Enter valid data !")
    }


}

