import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    const {email, password} = body.data;
    console.log(body.data);

    if(!email || !password) {
        return new NextResponse("Brakuje maila lub hasła", {status:400});
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email,
        }
    });

    if(exist) {
        return new NextResponse("Podany email jest wykorzystywany", { status: 400});
    }

   const hashedPassword = await bcrypt.hash(password, 10); 

   const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
   });

   return NextResponse.json(user)
}