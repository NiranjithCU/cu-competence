import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@db";

import NextAuth, { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      checks: ["pkce"],
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
    ? process.env.NEXTAUTH_SECRET
    : "NEXTAUTH_SECRET not found!",
  debug: true,
  callbacks: {
    async session({ session, token, user }) {
      session.id = user.id;
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
