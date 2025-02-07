'use client';

import { Theme } from '@radix-ui/themes';

import './globals.css';
import { ReactFlowProvider } from '@xyflow/react';
import React, { useEffect } from 'react';
// import { noevent } from '@/components/noevent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // console.log('ADDING111');
    // document.body.addEventListener(
    //   'touchstart',
    //   (evt) => {
    //     console.log('[demidn] - touch', evt);
    //     noevent(evt);
    //   },
    //   { passive: false },
    // );
  }, []);
  return (
    <html lang="en">
      <head></head>
      <body className={`antialiased`}>
        <ReactFlowProvider>
          <Theme className="h-full" appearance={'dark'}>
            {children}
          </Theme>
        </ReactFlowProvider>
      </body>
    </html>
  );
}
