import React from "react";
import { CreateProduct, ProductForm, Upload } from "./components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function SellingProduct() {
  const session = await getServerSession(authOptions);
  return <CreateProduct token={session?.user.accessToken} />;
}
