import React, { useRef } from 'react';
import { clsx } from 'clsx';
import { usePreventZoomWheelEvent } from '@/components/usePreventWheelZoomEvent';

export function Card3({ className }: { className: string }): React.JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomWheelEvent(elementRef);

  return (
    <div className={clsx('w-[200px] p-5 bg-crimson-6', className)} ref={elementRef}>
      BOX 3: Here we are trying to prevent everything related to zoom factor and such zooming with wheel on WIN
    </div>
  );
}
