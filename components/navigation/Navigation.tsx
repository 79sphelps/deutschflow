"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { useTheme } from "@/hooks/useTheme";
// import { navItems } from "@/lib/nav";
import {
  FaBook,
  FaGraduationCap,
  FaList,
  FaLanguage,
  FaChartLine,
} from "react-icons/fa";

const navItems = [
  { href: "/learn", label: "Learn", icon: FaGraduationCap },
  { href: "/lessons", label: "Lessons", icon: FaBook },
  { href: "/practice", label: "Practice", icon: FaList },
  { href: "/vocabulary", label: "Vocabulary", icon: FaLanguage },
  { href: "/progress", label: "Progress", icon: FaChartLine },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b dark:border-gray-800">
      {/* <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* TOP BAR */}
        <div className="h-14 sm:h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold tracking-tight"
            aria-label="DeutschFlow home"
          >
            🇩🇪 Deutsch<span className="text-blue-600">Flow</span>
          </Link>

          { user && <span>Hello, { user.name }</span> }

          {/* DESKTOP NAV */}
          {/* <div className="hidden sm:flex items-center gap-6"> */}
          <div className="hidden min-[830px]:flex items-center gap-6">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname.startsWith(href);

              return (
                <motion.div
                  key={href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Link
                    href={href}
                    className={`min-h-[44px] flex items-center gap-2 text-sm font-medium transition
                      ${
                        active
                          ? "text-blue-600"
                          : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                      }`}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>

                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded"
                    />
                  )}
                </motion.div>
              );
            })}

            {/* THEME TOGGLE */}
            <button
              onClick={toggle}
              className="min-h-[44px] min-w-[44px] p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* SIGN OUT */}
            {user && (
              <button
                className="text-sm text-gray-500 hover:text-red-600 transition"
                onClick={async () => {
                  await fetch("/api/auth/signout", { method: "POST" });
                  router.push("/signin");
                }}
              >
                Sign out
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen((o) => !o)}
            // className="sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            className="min-[830px]:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            area-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              // className="sm:hidden overflow-hidden border-t dark:border-gray-800"
              className="min-[830px]:hidden overflow-hidden border-t dark:border-gray-800"
            >
              {/* <div className="py-4 space-y-2"> */}
              <div className="flex flex-col gap-2 p-4 space-y-2">
                {navItems.map(({ href, label, icon: Icon }) => {
                  const active = pathname.startsWith(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded min-h-[48px]
                        ${
                          active
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{label}</span>
                    </Link>
                  );
                })}

                {/* MOBILE ACTIONS */}
                <div className="flex items-center justify-between px-4 pt-3 border-t dark:border-gray-800">
                  <button
                    onClick={toggle}
                    className="min-h-[44px] min-w-[44px] p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>

                  {user && (
                    <button
                      className="text-sm text-red-600"
                      onClick={async () => {
                        await fetch("/api/auth/signout", { method: "POST" });
                        router.push("/signin");
                      }}
                    >
                      Sign out
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}