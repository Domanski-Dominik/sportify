import mongoose,{ Schema,model, models } from "mongoose";

const ParticipantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        
    },
    surname: {
        type: String,
        required: [true, 'Surname is required!'],
        
    },
    gr:[{
        day: mongoose.Schema.Types.ObjectId,
        name: String,
    }],
    tel: {
        type: String,
    },
    email: {
        type: String,
    },
    presence:[{
        type: String,
    }],
    payments: Number,
    
    
});

const Participant = models.Participant || model("Participant", ParticipantSchema);

export default Participant;