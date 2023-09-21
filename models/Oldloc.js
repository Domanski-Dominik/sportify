import  mongoose, {Schema, model, models} from "mongoose";



const LocSchema = new Schema({
    place:{
        type: String,
        required: [true, 'Name your localization']
    },
    gr:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Group'}]
    
});

const OldLoc = models.Loc || model('Loc',LocSchema);

export default OldLoc;