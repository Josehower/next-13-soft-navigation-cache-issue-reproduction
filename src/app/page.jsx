export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      <h4>Home</h4>
      Random number = {Math.random() * 1000}
      <br />
      <br />
      How can I create a page that generates a new random number every time the
      page is loaded using a server component?
      <br />
      <br />
      Shouldn’t it work if using <code>dynamic = 'force-dynamic'</code> and{' '}
      <code>revalidate = 0</code> ?
    </main>
  );
}
