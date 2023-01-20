import Link from 'next/link';

const anchorStyle = {
  padding: '10px',
  margin: '3px',
  backgroundColor: '#8c0033',
  color: 'white',
};

const linkStyle = {
  ...anchorStyle,
  backgroundColor: '#b3fada',
  color: '#040013',
};

const navStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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
        <nav style={navStyle}>
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
        </nav>
        <h1>Next.js version: 13.1.4-canary.0</h1>
        {children}
      </body>
    </html>
  );
}
