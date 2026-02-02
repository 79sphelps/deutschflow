import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const _cookies = await cookies();
  _cookies.delete("session");
  return NextResponse.json({ success: true });
}