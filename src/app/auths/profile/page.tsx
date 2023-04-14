"use client";
import React from "react";
import { useAuthContext } from "../AuthContext";

export default function Profile() {
  const auth = useAuthContext();

  return (
    <div className="w-2/3 text-xl flex flex-col gap-4 pt-4 mx-auto">
      <h1 className="text-2xl">Profile</h1>

      <div className="flex flex-col border rounded-md p-4">
        <p>ID: {auth.currentUser?.id}</p>
        <p>Name: {auth.currentUser?.name}</p>
      </div>
    </div>
  );
}
