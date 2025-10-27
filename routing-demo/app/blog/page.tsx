import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
};

export default async function Blog() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve('Intentional delay.');
    }, 2000)
  );

  return <h1>Blog</h1>;
}
