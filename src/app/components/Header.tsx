"use client";

import Link from "next/link";
import React from "react";
import { useAuthContext } from "../auths/AuthContext";

function HeaderWithLogin() {
  return (
    <>
      <Link href={`/users`}>Users</Link>
      <Link href={`/posts`}>Posts</Link>

      <span className="mx-auto"></span>

      <Link
        href={`/posts/new`}
        className="bg-orange-800 hover:bg-orange-500 hover:text-slate-950
            px-2 rounded-md transition-all duration-200"
      >
        Write
      </Link>

      <Link
        href={`/auths/profile`}
        className="bg-purple-800 hover:bg-purple-500 hover:text-slate-950
            px-2 rounded-md transition-all duration-200"
      >
        Profile
      </Link>

      <Link
        href={`/auths/logout`}
        className="bg-green-800 hover:bg-green-500 hover:text-slate-950
            px-2 rounded-md transition-all duration-200"
      >
        Logout
      </Link>
    </>
  );
}

function HeaderWithoutLogin() {
  return (
    <>
      <span className="mx-auto"></span>

      <Link
        href={`/auths/login`}
        className="bg-green-800 hover:bg-green-500 hover:text-slate-950
            px-2 rounded-md transition-all duration-200"
      >
        Login
      </Link>

      <Link
        href={`/auths/signup`}
        className="bg-green-800 hover:bg-green-500 hover:text-slate-950
            px-2 rounded-md transition-all duration-200"
      >
        Signup
      </Link>
    </>
  );
}

export function Header() {
  const auth = useAuthContext();

  return (
    <div className="flex items-baseline text-xl gap-10 px-20 py-6">
      <h1 className="text-2xl">
        <Link href={`/`}>Logo</Link>
      </h1>

      {auth.currentUser ? <HeaderWithLogin /> : <HeaderWithoutLogin />}
    </div>
  );
}
