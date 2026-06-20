"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      router.push("/admin");

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={login}
        className="bg-zinc-900 p-10 rounded-2xl w-[400px]"
      >

        <h1 className="text-white text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-zinc-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-white text-black py-3 rounded"
        >
          Login
        </button>

      </form>

    </main>
  );
}