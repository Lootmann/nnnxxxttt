"use client";

import { useForm } from "react-hook-form";
import React from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("* onSubmit");
    console.log(data.name);
    console.log("name =", watch("name"));

    const res = await fetch("http://localhost:3000/api/auths/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.name }),
    });

    const d = await res.json();
    console.log(d);
  }

  return (
    <div className="flex flex-col gap-4 py-4 text-xl">
      <h1 className="text-2xl">LoginPage</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name")}
          placeholder="name"
          className="bg-slate-950 px-2 rounded-md"
        />

        <input
          type="submit"
          value="Login"
          className="bg-slate-950 px-2 rounded-md"
        />
      </form>
    </div>
  );
}
