// This is a Netlify Edge Function that helps with Next.js routing
export default async (request, context) => {
  const url = new URL(request.url);
  
  // Skip Next.js API routes and static files
  if (url.pathname.startsWith('/_next/') || 
      url.pathname.startsWith('/api/') ||
      url.pathname.includes('.')) {
    return;
  }

  // Add trailing slash for consistency if not present
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    return Response.redirect(url.origin + url.pathname + '/' + url.search, 301);
  }
};
