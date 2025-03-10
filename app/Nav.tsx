'use client';
import Link from "next/link";
import React from "react";

export function Nav() {

  return (
      <div className="flex h-[50px] items-center gap-[20px]">
        <Link href="demo1">
          Demo1
        </Link>
        <Link href="demo2">Demo2</Link>
        <Link href="demo3">Demo3</Link>
      </div>
  );
}
