export const dynamic = 'force-dynamic';

export default function Page3() {
  return (
    <main>
      <h4>Page 3</h4>
      Random number = {Math.random() * 1000}
      <br />
      <br />
      How can I create a page that generates a new random number every time the
      page is loaded using a server component?
      <br />
      <br />
      Shouldn’t it work if using <code>dynamic = 'force-dynamic'</code> ?
    </main>
  );
}
