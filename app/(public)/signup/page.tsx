"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm animate-fadeIn"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
          Willkommen 🇩🇪
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
          Create your German learning account
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-lg p-3 w-full mb-3 focus:ring-2 focus:ring-red-400"
        />
        <input
          className="border rounded-lg p-3 w-full mb-3 focus:ring-2 focus:ring-red-400"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-red-400"
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="min-h-[44px] min-w-[44px] w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-red-700 transition-all active:scale-[0.98]"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {/* <p className="text-center text-sm mt-4">
        No account?{" "}
        <a href="/signup" className="text-red-600 hover:underline">
          Sign up
        </a>
      </p> */}
      </form>
    </section>
  );
}
