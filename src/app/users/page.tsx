import Link from "next/link";
import React from "react";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  if (!res.ok) {
    throw new Error("/users/page.tsx");
  }

  const data = await res.json();
  return data.users as TUser[];
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="flex flex-col gap-4 text-xl pt-4">
      <h2 className="text-2xl">/users/pages.tsx</h2>

      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <p key={user.id} className="hover:bg-slate-700">
            <Link href={`/users/${user.id}`}>
              {user.id} {user.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
