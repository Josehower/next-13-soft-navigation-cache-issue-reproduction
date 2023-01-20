export const revalidate = 0;

export default function Page2() {
  return (
    <main>
      <h4>Page 2</h4>
      Random number = {Math.random() * 1000}
      <br />
      <br />
      How can I create a page that generates a new random number every time the
      page is loaded using a server component?
      <br />
      <br />
      Shouldn’t it work if using <code>revalidate = 0</code> ?
    </main>
  );
}
