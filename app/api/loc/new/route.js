import { connectToDB } from "@utils/database";
import Loc from "@models/loc";

connectToDB();

export const POST = async (req) => {

      try {
        const { name, address, daysOfWeek } = await req.json();
        console.log('Route js: '+ name,address, daysOfWeek)
        const location = new Loc({
          name,
          address,
          daysOfWeek,
        });

        const savedLocation = await location.save();
        return new Response(JSON.stringify(savedLocation), {status: 201})
      } catch (error) {
          console.error('Błąd podczas zapisywania lokalizacji:', error);
            return new Response("Błąd podczas zapisywania lokalizacji:", {status:500})
      }  
  }






        //Poprzednia wersja
       /* const savedGroups = await Promise.all(gr.map(async (groupName) => {
            const group = new Group({name: groupName});
            return await group.save();
        })
        );*/

        //Tworzenie nowej lokalizacji z referencjami do grup
       // const groupIds = savedGroups.map((group) => group._id)