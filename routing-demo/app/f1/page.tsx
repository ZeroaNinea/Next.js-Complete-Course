import Link from 'next/link';

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
        <Link href="/f3">F3</Link>
      </div>
    </>
  );
}

/*
(.) to match segments on the same level.
(..) to match segments one level above.
(..)(..) to match segments two levels above.
(...) to match segments from the root app directory.
*/
