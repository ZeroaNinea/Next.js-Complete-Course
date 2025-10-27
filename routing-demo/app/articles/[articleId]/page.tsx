import Link from 'next/link';

export default function NewsArticle() {
  return (
    <div>
      <h1>News article id</h1>
      <p>Reading in language</p>

      <div className="flex gap-4 flex-col">
        <Link href="/articles/id?lang=en">English</Link>
        <Link href="/articles/id?lang=fr">French</Link>
        <Link href="/articles/id?lang=es">Spanish</Link>
      </div>
    </div>
  );
}
