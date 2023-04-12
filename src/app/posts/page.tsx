import Link from "next/link";
import React from "react";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) throw new Error("/posts/page.tsx");

  const data = await res.json();
  return data.posts as TPost[];
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4 text-xl">
      <h2 className="text-2xl">/hoge/posts.tsx</h2>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="hover:bg-slate-700 px-2 rounded-md"
          >
            {post.id}, {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
