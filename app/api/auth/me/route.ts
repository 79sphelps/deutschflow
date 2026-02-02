// import { getCurrentUser } from "@/lib/auth";
import { getUserFromSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { User } from "@/hooks/useUser";

export async function GET() {
  const user: User = await getUserFromSession() as unknown as User;
  if (!user) return NextResponse.json(null, { status: 401 });
  return NextResponse.json(user);
}
