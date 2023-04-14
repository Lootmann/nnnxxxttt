import React from "react";

type PageProps = {
  params: {
    postId: number;
  };
};

async function getPostById(postId: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("posts/[postId]/page.tsx");

  const data = await res.json();
  return data.post as TPost;
}

export default async function Page({ params }: PageProps) {
  const post = await getPostById(params.postId);

  return (
    <div className="flex flex-col gap-4 text-xl">
      <h2 className="text-2xl">/posts/{params.postId}/pages.tsx</h2>

      <div className="border p-4">
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.title}</p>
        <p>
          Author: [{post.author.id}] {post.author.name}
        </p>
      </div>
    </div>
  );
}
