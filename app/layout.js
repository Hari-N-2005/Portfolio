import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hari-Govind</title>

        {/* <-- SIMPLE LINE ICONS CDN --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" />

        {/* <-- FAVICON --> */}
        <link rel="icon" href="/images/portfolio.png" type="image/png" />
      </head>
      <body>
        {children}
        <Analytics />
        <script defer src="https://kit.fontawesome.com/34b8159489.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
