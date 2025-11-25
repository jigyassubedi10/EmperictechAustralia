import "./css/font-awesome-pro.min.css";
import "./css/flaticon_gerold.css";
import "./css/animate.min.css";
import "./css/odometer-theme-default.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/nice-select2.css";
import "./css/backToTop.css";
import "./css/glightbox.min.css";
import "./globals.css";

import { Suspense } from "react";
import Script from "next/script";
import ThmeModeSwither from "@/components/shared/others/ThmeModeSwither";

export const metadata = {
  title: "EmpericTech",
  description:
    "EmpericTech - Empowering Businesses with Innovative IT Solutions",
  verification: {
    google: "fL4pkIy4ewdUGn9H_SYmEn5pHqBWjqJingj25niaCrE",
  },
};

export default function RootLayout({ children }) {
  const FACEBOOK_PIXEL_ID = "1381690410244000";

  return (
    <html lang="en" className="dark overflow-x-auto">
      <body className="font-sora dark:bg-dark-color overflow-x-hidden">
        <Suspense fallback={<></>}>{children}</Suspense>
        <ThmeModeSwither />

        {/* ⭐ Meta Pixel Script */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      </body>
    </html>
  );
}
