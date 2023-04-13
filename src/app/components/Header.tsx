import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <div className="flex items-baseline text-xl gap-10 px-20 py-6">
      <h1 className="text-2xl">
        <Link href={`/`}>Logo</Link>
      </h1>
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
    </div>
  );
}
