"use client";

import { useEffect, useState } from "react";

export type User = {
  _id: string;
  name: string;
  email: string;
  password?: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : null))
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, setUser };
}
