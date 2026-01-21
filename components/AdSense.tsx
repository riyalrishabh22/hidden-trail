"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  minWordCount?: number; // Minimum word count required to show ad
  contentWordCount?: number; // Actual word count of the page
}

export default function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
  minWordCount = 500,
  contentWordCount = 0,
}: AdSenseProps) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Deny list - pages where ads should never appear
  const denyList = [
    '/404',
    '/not-found',
    '/login',
    '/admin',
    '/search',
    '/tag',
  ];

  // Check if current page is in deny list
  const isPageDenied = denyList.some(path => pathname?.includes(path));

  // Check if content meets minimum threshold
  const meetsContentThreshold = contentWordCount >= minWordCount;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && meetsContentThreshold && !isPageDenied) {
      try {
        // Debug: Check if script loaded
        if (typeof window.adsbygoogle === 'undefined') {
          console.log('AdSense script not loaded yet');
          return;
        }
        
        console.log('Pushing ad to AdSense - Word count:', contentWordCount);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, [isMounted, meetsContentThreshold, isPageDenied, contentWordCount]);

  // Don't render if:
  // 1. Not mounted yet (SSR)
  // 2. Page is in deny list
  // 3. Content doesn't meet minimum threshold
  if (!isMounted || isPageDenied || !meetsContentThreshold) {
    console.log('Ad not shown:', { isMounted, isPageDenied, meetsContentThreshold, contentWordCount, minWordCount });
    return null;
  }

  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2168382917602072"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2168382917602072"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </>
  );
}
