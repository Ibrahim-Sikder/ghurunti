import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log(path);

  const publicRoutes = [
    "/",
    "/api/webhooks(.*)",
    "/api/uploadthing",
    "/:username",
    "/search"
  ];

  const isAuthenticated = request.cookies.has("token");

  // If the user is not authenticated and trying to access a protected route
  if (!publicRoutes.some(route => path.match(new RegExp(`^${route}$`))) && !isAuthenticated) {
    // Store the original requested URL in a cookie
    response.cookies.set("redirectUrl", path);

    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is already logged in and trying to access the login page
  if (path === "/login" && isAuthenticated) {
    // Retrieve the original requested URL from the cookie
    const redirectUrl = request.cookies.get("redirectUrl") || "/"; // Default to "/" if no redirect URL is stored

    // Clear the redirect URL from the cookie
    response.cookies.delete("redirectUrl");

    // Redirect to the originally requested protected page
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
