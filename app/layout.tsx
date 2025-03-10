'use client';

import './globals.css';
import React from 'react';
import { Nav } from '@/app/Nav';
import { Theme } from '@radix-ui/themes';
import { ReactFlowProvider } from '@xyflow/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`antialiased`}>
        <Theme appearance={'dark'} style={{ width: "100vw", height: "100vh" }}>
          <ReactFlowProvider>
            <div className="flex flex-col h-full w-full">
              <Nav />
              <div className="flex-1">{children}</div>
            </div>
          </ReactFlowProvider>
        </Theme>
      </body>
    </html>
  );
}
