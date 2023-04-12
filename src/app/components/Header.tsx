import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <div className="flex items-baseline text-xl gap-10 px-20 py-6">
      <h1 className="text-2xl">Logo</h1>
      <Link href={`/users`}>Users</Link>
    </div>
  );
}
