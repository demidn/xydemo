"use client"

import { Theme } from "@radix-ui/themes";

import "./globals.css";
import { ReactFlowProvider } from "@xyflow/react";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <ReactFlowProvider>
        <Theme className="h-full" appearance={'dark'}>
          {children}
        </Theme>
      </ReactFlowProvider>
      </body>
    </html>
  );
}
