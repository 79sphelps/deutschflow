import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/signin", "/signup"];

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  const { pathname } = req.nextUrl;

  const isProtected =
    pathname.startsWith("/lessons") ||
    pathname.startsWith("/learn") ||
    pathname.startsWith("/progress") || 
    pathname.startsWith("/grammar") ||
    pathname.startsWith("/practice") ||
    pathname.startsWith("/vocabulary");

  // Allow auth pages
  if (PUBLIC_ROUTES.includes(pathname)) {
    console.log('==== public route ====')
    return NextResponse.next();
  }

  // Block everything else
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/signin", req.url));
    // return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      Protect EVERYTHING except:
      - /signin
      - /signup
      - static assets
      - api/auth routes
    */
    // "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
    "/lessons/:path*",
    "/learn/:path*",
    "/progress/:path*",
    "/grammar/:path*",
    "/practice/:path*",
    "/vocabulary/:path*",
  ],
};
