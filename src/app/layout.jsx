export default function RootLayout() {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1>Next.js version: 13.1.3,</h1>
        {children}
      </body>
    </html>
  );
}
