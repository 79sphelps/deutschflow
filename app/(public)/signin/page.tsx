"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/ui/Input";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error);
    }

    router.push("/lessons");
  }

  return (
    <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
      <form
        aria-labelledby="signin-heading"
        onSubmit={handleSignIn}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm animate-fadeIn"
      >
        <h1 id="signin-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-6">
          Willkommen 🇩🇪
        </h1>

        <Input name="email" placeholder="Email" type="text" />
        <Input name="password" placeholder="Password" type="password" />
        
        {/* <button
          disabled={loading}
          className="min-h-[44px] min-w-[44px] w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all active:scale-[0.98]"
        > */}
        <button
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all active:scale-[0.98]"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
        <p className="text-center text-sm mt-4">
          No account?{" "}
          <a href="/signup" className="text-red-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </section>
  );
}
