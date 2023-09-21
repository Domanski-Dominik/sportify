import  mongoose, {Schema, model, models} from "mongoose";

// Schema dla grupy
//const groupSchema = new Schema({
 // name: String,
//});

// Schema dla lokalizacji
const LocSchema = new Schema({
  name: String,
  address: String,
  daysOfWeek: [
    {
      day: String,
      groups: [/*groupSchema*/], // Tablica zagnieżdżona zawierająca grupy
    },
  ],
});

const Loc = models.Loc || model('Loc',LocSchema);

export default Loc;