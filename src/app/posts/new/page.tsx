"use client";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TPostForm>({
    defaultValues: {
      authorId: 1,
      title: "",
      content: "",
    },
  });

  // TODO: validation
  async function onSubmit(data: TPostForm) {
    const res = await fetch("http://localhost:3000/api/posts/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorId: data.authorId,
        title: data.title,
        content: data.content,
      }),
    });

    const d = await res.json();
  }

  // TODO: create selectForm with db records
  // TODO: How do I fix it?
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectForm, setSelectForm] = useState<React.ReactNode>();

  useEffect(() => {
    const selectFetch = async () => {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      const users = data.users as TUser[];

      setSelectForm(
        <>
          {users.map((user) => (
            <option key={`${user.id}`} value={`${user.id}`}>
              {user.name}
            </option>
          ))}
        </>
      );
    };

    selectFetch();
    setIsLoading(true);
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 py-4 text-xl">
      <h2 className="text-2xl">New Post</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-1 flex-col gap-4 bg-slate-900 p-4 rounded-md"
      >
        <div className="flex gap-6">
          <label htmlFor="author">Author</label>

          {isLoading && (
            <select
              {...register("authorId")}
              className="bg-slate-950 rounded-md"
            >
              {selectForm}
            </select>
          )}

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
