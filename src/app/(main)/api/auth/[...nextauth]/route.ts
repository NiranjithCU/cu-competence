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
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@cu.ca",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          throw new Error("Wrong credentials. Try again.");
        }

        const hashPassword = (password: string) => {
          return sha256(password).toString();
        };

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (user && user.password === hashPassword(credentials.password)) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = {
        name: token.name,
        email: token.email,
        id: token.sub,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

declare module "next-auth" {
  export interface Session {
    user: {
      name: string | null | undefined;
      email: string | null | undefined;
      id: string | null | undefined;
    };
  }
}
