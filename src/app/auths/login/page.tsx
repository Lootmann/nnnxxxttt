"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

type TForm = {
  name: String;
  loginError: String;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<TForm>();

  const [, setCookie] = useCookies(["userAuth"]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(true);

  async function onSubmit(data: TForm) {
    console.log("* onSubmit");
    console.log("wathc(name) =", watch("name"));

    const res = await fetch("http://localhost:3000/api/auths/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: data.name }),
    });

    const d = await res.json();
    console.log(d);

    if (res.ok) {
      setCookie("userAuth", data.name, {
        path: "/",
        sameSite: true,
      });
      setIsSubmitting(!isSubmitting);
      window.location.href = "/";
    } else {
      setError("loginError", { message: "fail to login D:" });
    }
  }

  return (
    <div className="flex flex-col gap-4 py-4 text-xl">
      <h1 className="text-2xl">LoginPage</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {errors.loginError && (
          <p className="text-orange-600 text-2xl rounded-md px-2">
            {errors.loginError?.message}
          </p>
        )}

        <input
          {...register("name", { onChange: () => clearErrors() })}
          required
          placeholder="name"
          className="bg-slate-950 px-2 rounded-md"
          autoFocus
        />

        {/* TODO: add password */}
        <input
          type="submit"
          value="Login"
          className="bg-slate-950 px-2 rounded-md"
        />
      </form>
    </div>
  );
}
