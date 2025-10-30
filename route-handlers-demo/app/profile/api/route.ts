import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get('Authorization'));

  return new Response(JSON.stringify({ data: 'API Response' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
