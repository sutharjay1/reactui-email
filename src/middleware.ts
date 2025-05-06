import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const sessionCookie = getSessionCookie(req);

  console.log("running middleware");
  console.log("sessionCookie", sessionCookie);

  if (!sessionCookie) {
    console.log("no session cookie");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ai"],
};
