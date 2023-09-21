import {Schema, model, models} from "mongoose";

const PresenceSchema = new Schema({
    participant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: [{
        type: Date, 
    }],
});

const Presence = models.Presence ||  model('Presence', PresenceSchema);

export default Presence;