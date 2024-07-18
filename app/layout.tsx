import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.crosscountrymoving.company/'),
  title: "Cross Country Moving Company",
  description: 'At Cross Country Moving Company, we are more than just movers; we are a team of dedicated professionals committed to making your moving experience as smooth and stress-free as possible.',
  twitter: {
    card: 'summary_large_image',
    title: 'Cross Country Moving Company',
    description: 'At Cross Country Moving Company, we are more than just movers; we are a team of dedicated professionals committed to making your moving experience as smooth and stress-free as possible.',
    images: ['/Cross-Coutrny-Moving.png'],
  },
  openGraph: {
    title: 'Cross Country Moving Company',
    description: 'At Cross Country Moving Company, we are more than just movers; we are a team of dedicated professionals committed to making your moving experience as smooth and stress-free as possible.',
    type: 'website',
    url: 'https://www.crosscountrymoving.company/',
    images: ['/Cross-Coutrny-Moving.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
