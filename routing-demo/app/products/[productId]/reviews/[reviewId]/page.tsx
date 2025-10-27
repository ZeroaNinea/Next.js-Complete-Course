import { redirect } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading review.');
  }

  const productId = (await params).productId;
  const reviewId = (await params).reviewId;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect('/products');
  }

  return (
    <h1>
      Product {productId} Review {reviewId}
    </h1>
  );
}
