"use client";

import Link from "next/link";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useUser } from "@/hooks/useUser";

export function Header() {
  const { dark, toggle } = useTheme();
  const { user, signOut } = useUser();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold">
          🇩🇪 DeutschFlow
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/lessons" className="hover:text-blue-600">Lessons</Link>
          <Link href="/progress" className="hover:text-blue-600">Progress</Link>
          <Link href="/vocabulary" className="hover:text-blue-600">Vocabulary</Link>

          <button onClick={toggle} className="min-h-[44px] min-w-[44px]">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={signOut}
            className="min-h-[44px] min-w-[44px] flex items-center gap-1 text-sm text-red-500 hover:underline"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </nav>
      </div>
    </header>
  );
}
