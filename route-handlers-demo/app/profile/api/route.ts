import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  const headersList = await headers();
  console.log(headersList.get('Authorization'));
  console.log(request.cookies.get('theme')?.value);

  // return new Response(JSON.stringify({ data: 'API Response' }), {
  //   headers: { 'Content-Type': 'application/json' },
  //   status: 200,
  // });
  return new Response('<h1>Profile API data.</h1>', {
    headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
    status: 200,
  });
}
