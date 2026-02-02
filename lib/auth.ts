import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";

const SESSION_COOKIE = "session";

export async function getUserFromSession() {
  const _cookies = await cookies();
  const session = _cookies.get(SESSION_COOKIE)?.value;
  // const session = cookies().get(SESSION_COOKIE)?.value;
  if (!session) return null;

  const client = await clientPromise;
  const db = client.db();

  return db.collection("users").findOne({ _id: new ObjectId(session) });
}

export async function createSession(userId: string) {
  const _cookies = await cookies();
  // cookies().set(SESSION_COOKIE, userId, {
  _cookies.set(SESSION_COOKIE, userId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

// export function destroySession() {
export async function destroySession() {
  const _cookies = await cookies();
  // cookies().delete(SESSION_COOKIE);
  _cookies.delete(SESSION_COOKIE);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
