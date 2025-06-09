import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define routes that should be public (accessible without authentication)
// Update this list as your application grows
const isPublicRoute = createRouteMatcher([
  '/',                // Launch page
  '/about',           // About page
  '/sign-in(.*)',     // Sign-in page and its sub-routes
  '/sign-up(.*)',     // Sign-up page and its sub-routes
  // You might want to add API routes or other specific public paths here
  // e.g., '/api/webhooks/(.*)' if you have public webhooks
]);

// Define routes that should be protected (require authentication)
// Clerk protects all routes by default if they are not listed in isPublicRoute
// If you have specific routes that MUST be protected, you can list them here,
// but usually, relying on the default behavior (protect if not public) is sufficient.
// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',
//   '/profile(.*)',
// ]);

export default clerkMiddleware((auth, req) => {
  // Protect all routes that are not public
  if (!isPublicRoute(req)) {
    auth.protect();
  }

  // If you had specific protected routes and wanted to handle them differently:
  // if (isProtectedRoute(req)) {
  //   auth().protect();
  // }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes, if you want to handle them separately or leave them public by default)
     * Matcher also includes / and /api routes
     */
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
    '/',
    '/api/(.*)', // Example: include API routes if they need middleware processing
                 // Adjust if your API routes have different auth needs
  ],
};
