// RootLayout.tsx

import Head from "next/head";
import { genAIStudyJamsSEO } from "./seo";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });
import Confetti from 'react-confetti'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="bg-slate-950">
      <Head>
        <title>{genAIStudyJamsSEO.title}</title>
        
        <link rel="icon" href="./favicon.ico" />
        <meta name="description" content={genAIStudyJamsSEO.description} />
        <meta name="keywords" content={genAIStudyJamsSEO.keywords.join(", ")} />
        {/* Add more SEO-related meta tags as needed */}
      </Head>
      <body className={inter.className}>
       
     
        {children}
      
        <Analytics />
      </body>
    </html>
  );
}

