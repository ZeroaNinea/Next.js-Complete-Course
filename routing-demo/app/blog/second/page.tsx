import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog', // Add absolute title.
  },
};

export default function BlogSecond() {
  return <h1>Blog Second</h1>;
}
