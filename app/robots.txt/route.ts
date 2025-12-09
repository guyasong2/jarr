// app/robots.txt/route.ts
export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://jarr-cm.vercel.app/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}