'use client';

import './globals.css';
import React from 'react';
import { Nav } from '@/app/Nav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased`}>
        <div className="flex flex-col h-full w-full">
          <Nav />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
