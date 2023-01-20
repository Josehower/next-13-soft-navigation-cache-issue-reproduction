import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      Random number = {Math.random() * 1000}
      <br />
      <br />
      How can i make a page that generates a random number with a server
      component only?
      <br />
      <br />
      shouldn't work if using <code>dynamic = 'force-dynamic'</code> and{' '}
      <code>revalidate = 0</code> ?
      <hr />
      Soft Navigation return cached numbers:{' '}
      <Link style={{ backgroundColor: 'beige' }} href={'/page2'}>
        Go page2
      </Link>
      <br />
      <br />
      <br />
      Hard Navigation return expected values:{' '}
      <a style={{ backgroundColor: 'beige' }} href={'/page2'}>
        Go page2
      </a>
    </main>
  );
}
