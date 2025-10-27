import Link from 'next/link';

export default function ProductList() {
  const products = [];

  for (let i = 1; i <= 10; i++) {
    products.push(
      <h2 key={i}>
        <Link href={`products/${i}`}>Product {i}</Link>
      </h2>
    );
  }

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product list</h1>
      {products}
    </>
  );
}
