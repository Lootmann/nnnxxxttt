"use client";

import { useCookies } from "react-cookie";

export default function LogoutPage() {
  const [, , removeCookie] = useCookies(["userAuth"]);

  removeCookie("userAuth");
  window.location.href = "/auths/login";
}
