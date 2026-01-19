import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiddentrails.netlify.app'),
  title: {
    default: "Hidden Trails - Discover Rishikesh's Secret Places",
    template: "%s | Hidden Trails Rishikesh"
  },
  description: "Discover the hidden gems of Rishikesh - from secret waterfalls to peaceful temples, explore places beyond the ordinary. Find offbeat locations, spiritual spots, and nature trails.",
  keywords: ["Rishikesh", "hidden places", "travel", "waterfalls", "temples", "tourism", "offbeat destinations", "spiritual places", "adventure", "Uttarakhand", "India travel", "secret spots", "unexplored"],
  authors: [{ name: "Hidden Trails" }],
  creator: "Hidden Trails",
  publisher: "Hidden Trails",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hiddentrails.netlify.app',
    siteName: 'Hidden Trails Rishikesh',
    title: "Hidden Trails - Discover Rishikesh's Secret Places",
    description: "Discover the hidden gems of Rishikesh - from secret waterfalls to peaceful temples, explore places beyond the ordinary.",
    images: [
      {
        url: '/images/triveni-ghat/image1.png',
        width: 1200,
        height: 630,
        alt: 'Hidden Trails Rishikesh - Discover Secret Places',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hidden Trails - Discover Rishikesh's Secret Places",
    description: "Discover the hidden gems of Rishikesh - from secret waterfalls to peaceful temples, explore places beyond the ordinary.",
    images: ['/images/triveni-ghat/image1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ca-pub-2168382917602072',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2168382917602072" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
