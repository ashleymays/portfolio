import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const inter = localFont({
  src: './InterVariable.ttf'
});

export const metadata: Metadata = {
  title: 'Ashley Mays',
  description:
    'Ashley Mays is a skilled software developer with expertise in full stack web development.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
