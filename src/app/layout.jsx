import Link from 'next/link';

const linkStyle = {
  backgroundColor: '#b3fada',
  color: '#040013',
  padding: '10px',
  margin: '3px',
};

const anchorStyle = {
  backgroundColor: '#8c0033',
  color: 'white',
  padding: '10px',
  margin: '3px',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Link style={linkStyle} href={'/'}>
            Soft link to Home
          </Link>
          <a style={anchorStyle} href={'/'}>
            Hard link to Home
          </a>
          <Link style={linkStyle} href={'/page2'}>
            Soft link to page2
          </Link>
          <a style={anchorStyle} href={'/page2'}>
            Hard link to page2
          </a>
          <Link style={linkStyle} href={'/page3'}>
            Soft link to page3
          </Link>
          <a style={anchorStyle} href={'/page3'}>
            Hard link to page3
          </a>
          <div></div>
          <div></div>
        </nav>
        <h1>Next.js version: 13.1.4-canary.0</h1>
        {children}
      </body>
    </html>
  );
}
