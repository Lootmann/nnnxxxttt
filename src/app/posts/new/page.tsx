"use client";

import { useForm } from "react-hook-form";
import React from "react";

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPostForm>();

  async function onSubmit(data: TPostForm) {
    console.log(watch("title"), watch("content"));
    console.log(data);

    const res = await fetch("http://localhost:3000/api/posts/new", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const d = await res.json();
    console.log(d);
  }

  return (
    <div className="flex flex-1 flex-col gap-4 py-4 text-xl">
      <h2 className="text-2xl">New Post</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-1 flex-col gap-4 bg-slate-900 p-4 rounded-md"
      >
        <div className="flex gap-6">
          <input
            defaultValue={""}
            placeholder="title"
            {...register("title")}
            className="flex-1 rounded-md p-2 bg-slate-950"
          />
          <input
            type="submit"
            value="Create"
            className="bg-green-900 hover:bg-green-500 text-slate-200 hover:text-slate-900
            px-2 rounded-md transition-all duration-200"
          />
        </div>

        <textarea
          placeholder="content"
          defaultValue={""}
          {...register("content")}
          className="flex-1 rounded-md p-2 bg-slate-950"
        />
      </form>
    </div>
  );
}
