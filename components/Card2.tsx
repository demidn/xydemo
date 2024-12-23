import React, { useRef } from "react";
import { clsx } from 'clsx';
import { usePreventZoomEvent } from "@/components/usePreventZoomEvent";

export function Card2({ className }: { className: string }): React.JSX.Element {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomEvent(elementRef);

  return <div className={clsx('w-[200px] p-5 bg-red-6', className)} ref={elementRef}>
    BOX 2: Contains first fix, might be still wrong with mouse wheel, but prevenats mobile 2 fingers zoom
  </div>;
}
