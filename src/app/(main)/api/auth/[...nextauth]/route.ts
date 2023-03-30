import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@db";

import sha256 from "crypto-js/sha256";

import NextAuth, { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GitHubProvider({
    //   clientId: `${process.env.GITHUB_ID}`,
    //   clientSecret: `${process.env.GITHUB_SECRET}`,
    //   checks: ["pkce"],
    // }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      checks: ["none"],
    }),
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "text",
    //       placeholder: "email@cu.ca",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //     },
    //   },
    //   authorize: async (credentials, req) => {
    //     if (!credentials) {
    //       throw new Error("Wrong credentials. Try again.");
    //     }
    //     const hashPassword = (password: string) => {
    //       return sha256(password).toString();
    //     };

    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials?.email,
    //       },
    //     });

    //     if (user && user.password === hashPassword(credentials.password)) {
    //       return { name: user.name, email: user.email, id: user.id };
    //     }

    //     throw new Error("Wrong credentials. Try again.");
    //   },
    // }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.id = user.id;
      console.log(session)
      console.log(user)
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

declare module "next-auth" {
  export interface Session {
    id: string;
  }
}
