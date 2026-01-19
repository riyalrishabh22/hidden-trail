"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
}: AdSenseProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        // Debug: Check if script loaded
        if (typeof window.adsbygoogle === 'undefined') {
          console.log('AdSense script not loaded yet');
          return;
        }
        
        console.log('Pushing ad to AdSense');
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, [isMounted]);

  // Only render on client side to avoid hydration mismatch
  if (!isMounted) {
    return <div style={{ minHeight: "100px" }} />;
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
