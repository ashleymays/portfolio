import { Hanken_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashley Mays',
  description:
    'Ashley Mays is a skilled software developer with expertise in full stack web development.'
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}
