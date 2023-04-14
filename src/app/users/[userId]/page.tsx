import React from "react";

type PageProps = {
  params: {
    userId: number;
  };
};

async function getUserById(userId: number) {
  const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("users/[userId]/page.tsx");

  const data = await res.json();
  return data.user as TUser;
}

export default async function Page({ params }: PageProps) {
  const user = await getUserById(params.userId);

  return (
    <div className="flex flex-col gap-4 text-xl">
      <h2 className="text-2xl">/users/{params.userId}/pages.tsx</h2>

      <div className="border p-4">
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
}
