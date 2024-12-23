import React from 'react';
import { clsx } from 'clsx';

export function Card1({ className }: { className: string }): React.JSX.Element {
  return (
    <div className={clsx('w-[200px] p-5 bg-grass-6', className)}>
      BOX 1: Test by trying to wheel mouse / zoom in out. Nothing was fixed in this box so, assume bug exists here
    </div>
  );
}
