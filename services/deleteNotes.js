import { notesModel } from "../database/models.js";


export const deleteNotes = async(req, res) => {
    const { id } = req.params;
    const note = await notesModel.findOne({_id:id});
    if (note) {
        notesModel.findOneAndDelete({_id:id}).then(() => {
            res.send("Note succesfully deleted");
        }).catch(() => {
            res.send("Cannot found note with this id")
        });
    } else {
        res.send("Cannot found note with this id")
    }
    
   

}