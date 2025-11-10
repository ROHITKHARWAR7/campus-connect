import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import connectDb from "@/utils/connectDb";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  useSecureCookies: process.env.NODE_ENV === "production",
  providers: [
    Google,
    Credentials({
      credentials: {
        admissionId: { label: "Admission id", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectDb();
        const { admissionId, password } = credentials;
        const user = await User.findOne({ admissionId });
        // console.log(user);
        if (!user) {
          throw new Error("User not found");
        }
       
        // Compare the provided password with the hashed password in the database
        const isPasswordMatch = password == user.password

        if (!isPasswordMatch) {
          throw new Error("Password is not correct");
        }
     
        return {
          id: user._id.toString(), 
          admissionId: user.admissionId,
          name: user.name,
          image :user?.image
        };
        

      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        await connectDb();
        
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: profile?.email });
        
        if (existingUser===null) {
            // if there is no user the also insert that user in the db
          const password = await bcrypt.hash("null", 10);
          const newUser = new User({
            name: profile?.name,
            email: profile?.email,
            image: profile?.picture,
            provider: "google",
            password:password, // Optional: Store the provider
            admissionId:profile?.name
          });

          await newUser.save();
 
          // Update the user object with the new user's ID
          user.id = newUser._id.toString();
          
        } else {
          console.log("else kem andar hai")
          // Update the user object with the existing user's ID
          user.id = existingUser._id.toString();
        }
      }

      return true; // Allow the sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id; 
      }
      return session;
    },
  },
});
// helo
