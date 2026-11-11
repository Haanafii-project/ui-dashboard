import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_session")?.value;
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/login";

  // 1. Jika belum login dan mencoba akses rute internal
  if (!token && !isLoginPage) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Jika sudah login tapi membuka halaman /login lagi
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  return NextResponse.next();
}

// Konfigurasi matcher yang aman: kecualikan file Next internal & semua file berektensi (.css, .js, .svg, dll)
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)",
  ],
};
