import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { Nav } from '@/app/Nav';

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex h-[60px] items-center gap-[10px]">
        <Nav />
      </div>
      <div></div>
    </div>
  );
}
