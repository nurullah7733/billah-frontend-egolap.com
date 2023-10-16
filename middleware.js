import { NextResponse } from "next/server";

export async function middleware(req, res) {
  // check login
  if (req.nextUrl.pathname.startsWith("/login")) {
    let token = req.cookies.has("token");
    if (!token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // check checkout && confirm order
  if (
    req.nextUrl.pathname.startsWith("/checkout") ||
    req.nextUrl.pathname.startsWith("/confirm-order") ||
    req.nextUrl.pathname.startsWith("/user-dashboard") ||
    req.nextUrl.pathname.startsWith("/user-dashboard/edit-profile") ||
    req.nextUrl.pathname.startsWith("/user-dashboard/orders/running-orders") ||
    req.nextUrl.pathname.startsWith("/user-dashboard/orders/delivery-orders") ||
    req.nextUrl.pathname.startsWith("/user-dashboard/orders/return-orders") ||
    req.nextUrl.pathname.startsWith("/user-dashboard/orders/cancel-orders")
  ) {
    let token = req.cookies.has("token");
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
