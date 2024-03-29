import React, { useContext } from 'react';
import Head from 'next/head';

import { getSEO } from '../utils';
import { SEOContext } from '../utils/contexts';
type SeoType = {
  page: string;
};
const SEO = ({ page }: SeoType) => {
  const seo = useContext(SEOContext) || [];

  //   <script type='application/ld+json'>
  // {
  //     "@context": "http://schema.org/",
  //     "@type": "Organization",
  //     "legalName": "name",
  //     "url": "url.com",
  //     "contactPoint": {
  //         "@type": "ContactPoint",
  //         "telephone": "telephone",
  //         "contactType": "contact type"
  //     },
  //     "logo": "logourl.com/test.jpg",
  //     "sameAs": "social profiles",
  //     "address": {
  //         "@type": "PostalAddress",
  //         "streetAddress": "address",
  //         "addressLocality": "city",
  //         "addressRegion": "state region",
  //         "postalCode": "zip",
  //         "addressCountry": "country"
  //     }
  // }
  // </script>
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${getSEO(seo, 'GTM')}');
        `,
        }}
      ></script>

      <title>
        {getSEO(seo, 'title')} | {page}
      </title>
      <link rel="shortcut icon" href={getSEO(seo, 'favicon')} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={getSEO(seo, 'url')} />
      <meta name="twitter:title" content={getSEO(seo, 'title')} />
      <meta name="twitter:description" content={getSEO(seo, 'description')} />
      <meta name="twitter:image" content={getSEO(seo, 'twitterCard')} />

      {/* <meta name="twitter:creator" content={getSEO(seo, 'twitterName')} /> */}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={getSEO(seo, 'title')} />
      <meta property="og:description" content={getSEO(seo, 'description')} />
      <meta property="og:site_name" content={getSEO(seo, 'title')} />
      <meta property="og:url" content={getSEO(seo, 'url')} />
      <meta property="og:image" content={getSEO(seo, 'twitterCard')} />
      <meta name="application-name" content={getSEO(seo, 'title')} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={getSEO(seo, 'title')} />
      <meta name="description" content={getSEO(seo, 'description')} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color" content={getSEO(seo, 'themeColor')} />
    </Head>
  );
};

export default SEO;
