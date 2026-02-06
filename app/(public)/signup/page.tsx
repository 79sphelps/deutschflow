"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/ui/Input";

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
        aria-labelledby="signup-heading"
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm animate-fadeIn"
      >
        <h1
          id="signup-heading"
          className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6"
        >
          Willkommen 🇩🇪
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
          Create your German learning account
        </h1>

        <Input
          name="name"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          name="email"
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          name="password"
          placeholder="Password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
