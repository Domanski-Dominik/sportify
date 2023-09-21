import { connectToDB } from "@utils/database";
import Loc from "@models/loc";
import mongoose from "mongoose";


export const GET = async (req, { params }) => {

        try {
            await connectToDB();
            
            const groupId = new mongoose.Types.ObjectId(params.id)
            //znajduje wszystkie grupy w bazie danych
            const loc = await Loc.aggregate([
                {
                   $unwind: '$daysOfWeek', //Rozłóż tablice daysOfWeek
                },
                {
                    $match: {
                        'daysOfWeek._id': groupId, // Dopasuj grupy o podanym _id
                    },
                },
            ])
            
            const groups= loc.map((loc) => loc.daysOfWeek.groups).flat();

            if(!loc) return new Response("Loc not found", { status: 404});


            return new Response(JSON.stringify(groups), {status: 201})
        } catch (error) {
            console.error('Błąd podczas pobierania nazw grup:', error);
            return new Response("Failed to find groups", {status:500})
        } 

   
}