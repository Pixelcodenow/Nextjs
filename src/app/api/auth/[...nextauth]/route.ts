// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // এখানে আপনার ব্যবহারকারী যাচাইকরণের যুক্তি লিখুন
    //     // যেমন: একটি ডেটাবেস থেকে ব্যবহারকারী খুঁজে বের করা
    //     if (credentials.email === "test@example.com" && credentials.password === "password123") {
    //       // যদি ব্যবহারকারী সঠিক হয়, তবে একটি অবজেক্ট রিটার্ন করুন
    //       return { id: "1", name: "Test User", email: "test@example.com" };
    //     } else {
    //       // যদি সঠিক না হয়, তবে null রিটার্ন করুন
    //       return null;
    //     }
    //   }
    // }), 
       GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };