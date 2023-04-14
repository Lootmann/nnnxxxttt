"use client";

import { redirect } from "next/navigation";
import { useCookies } from "react-cookie";

export default function LogoutPage() {
  const [, , removeCookie] = useCookies(["userAuth"]);

  // TODO: delete cookie
  removeCookie("userAuth");

  // TODO: redirect /login
  redirect("/auths/login");
}
