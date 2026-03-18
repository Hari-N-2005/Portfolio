import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import basePath from "./lib/basePath";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const iconPath = `${basePath}/favicon.png?v=20260318`;

// TODO: Please update the title and description with your personal information
export const metadata: Metadata = {
  title: "Hari Govind N | Portfolio",
  description: "Aspiring Full Stack Developer skilled in secure web applications, scalable APIs, and data-driven tools.",
  icons: {
    icon: iconPath,
    shortcut: iconPath,
    apple: iconPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" type="image/png" sizes="32x32" href={iconPath} />
        <link rel="shortcut icon" href={iconPath} />
        <link rel="apple-touch-icon" href={iconPath} />
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.history.scrollRestoration = 'manual';
              window.scrollTo(0, 0);
            }
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
