import Link from "next/link";
import React from "react";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("/posts/page.tsx");

  const data = await res.json();
  return data.posts as TPost[];
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="w-full flex flex-col gap-4 text-xl pt-4">
      <h2 className="text-2xl">/posts/posts.tsx</h2>

      <div className="w-full flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex-1 border p-2 border-slate-500 hover:bg-slate-700
            rounded-md transition-all duration-200 inline"
          >
            <Link href={`/posts/${post.id}`} key={post.id}>
              <header>
                <span>
                  {post.title} @ {post.author.name}
                </span>
              </header>

              <p>{post.content}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
