export async function GET() {
  return new Response(JSON.stringify({ data: 'API Response' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
