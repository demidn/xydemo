import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { usePreventWheelZoom2Event } from '@/components/usePreventWheelZoom2Event';

export function Card4({ className }: { className: string }): React.JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventWheelZoom2Event(elementRef);

  return (
    <div className={clsx('w-[200px] p-5 bg-teal-6', className)} ref={elementRef}>
      BOX 4: One more different type of wheel preventing
    </div>
  );
}
