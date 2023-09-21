import { connectToDB } from "@utils/database";
import Loc from "@models/Oldloc";

export const GET = async (request) => {
    try {
        await connectToDB();

        //znajduje wszystkie lokalizacje w bazie danych
        const loc = await Loc.find({});

        return new Response(JSON.stringify(loc), {status: 200})
    } catch (error) {
        return new Response('Faild to fetch all loc', {status: 500})
    }
}