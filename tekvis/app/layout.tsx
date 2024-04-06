import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const metadata = {
  title: "Tekken 8 Data Visualizer",
  description: "Visualize your Tekken 8 stats and improve your gameplay!",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
};

export default RootLayout;
