import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '#/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'whitepace | Get more done',
 description:
  'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks',
 icons: ['/logoicon.svg'],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <Navbar />
    {children}
   </body>
  </html>
 );
}
