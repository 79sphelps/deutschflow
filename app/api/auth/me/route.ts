// import { getCurrentUser } from "@/lib/auth";
import { getUserFromSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUserFromSession();
  if (!user) return NextResponse.json(null, { status: 401 });
  return NextResponse.json(user);
}
