import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      accessToken: string;
      address: string;
      phoneNumber: string;
      name: string;
    };
  }
}
