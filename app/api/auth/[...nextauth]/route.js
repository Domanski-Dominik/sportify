import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Nazwa użytkownika" },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email"}
      },
      async authorize(credentials) {
        // Sprawdzenie czy mail i hasło są poprawne
        if (!credentials.email || !credentials.password) {
          return null;
        } 
        // Sprawdzenie czy użytkownik istnieje
        const user = await prisma.user.findUnique({
          where: {
              email: credentials.email
          }
        });

        if(!user) {
          return null;
        }
        
        // Sprawdzenie czy hasło jest poprawne
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);

        if(!passwordMatch) {
          return null;
        }

        // Jeżeli wszystko poprawnę zwracamy obiekt użytkownika
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 *60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV ==="development",
  
}

/*const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })

  ],
  callbacks: {
    async session({ session,token, user }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  },
  session: {
    maxAge: 30 * 24 *60 * 60,
  }
})
*/

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }