import { connectToDB } from "@utils/database";
import Participant from "@models/participant";


export const PATCH= async (req) => {

      try {
        await connectToDB();
        const { id, date } = await req.json();
        
        console.log('Route js: '+ id, date);

        const existingParticipant = await Participant.findById(id);
        if(!existingParticipant) return new Response("Participant not found", {status: 404});
        
        if (!existingParticipant.presence ) {
          console.log('mamy kurwa null')
          existingParticipant.presence = [];
        }
      
        console.log(existingParticipant.presence);
        existingParticipant.presence.push(date);
        //console.log(existingParticipant);
        await existingParticipant.save();

        return new Response(JSON.stringify(existingParticipant), {status: 200})
      } catch (error) {
          console.error('Błąd podczas zapisywania Obecności:', error);
            return new Response("Błąd podczas obecności:", {status:500})
      }  
  }


