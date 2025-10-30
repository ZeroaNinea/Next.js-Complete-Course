import { comments } from '../data';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));

  return new Response(JSON.stringify(comment), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].text = text;

  return new Response(JSON.stringify(comments[index]), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
