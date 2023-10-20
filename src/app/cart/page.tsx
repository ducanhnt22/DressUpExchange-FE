import React from "react";
import { CartList } from "./components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Cart() {
  const session = await getServerSession(authOptions);
  return (
    <CartList
      address={session?.user.address}
      name={session?.user.name}
      phone={session?.user.phoneNumber}
      token={session?.user.accessToken}
    />
  );
}
