"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response: ", data);

      if (res.ok) {
        toast.success("Login successful!");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed! Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        action=""
        method="POST"
        onSubmit={handleSubmit}
        className="bg-primary-base p-10 rounded"
      >
        <h2 className="text-3xl text-black font-semibold mb-5">Log In</h2>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-2 text-black">
            <label htmlFor="email" className="text-xl text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black bg-amber-50 text-lg"
            />
          </div>
          <div className="flex flex-col gap-2 text-black">
            <label htmlFor="password" className="text-xl text-zinc-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black bg-amber-50 text-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`p-2 ${
            isLoading ? "bg-zinc-600" : "bg-zinc-800"
          } text-white active:bg-gray-500 hover:bg-gray-600 focus:bg-gray-600 mt-5`}
        >
          {isLoading ? "Loading..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
