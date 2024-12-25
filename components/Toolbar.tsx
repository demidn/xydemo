import { clsx } from 'clsx';
import { useRef } from "react";
import { usePreventZoomEvent } from "@/components/usePreventZoomEvent";

export function Toolbar({ className }: { className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomEvent(elementRef);

  return (
    <div className={clsx('fixed flex items-center justify-center top-2 left-2 bg-panel-translucent h-[140px] w-[300px]', className)} ref={elementRef}>
      Toolbar simulation
    </div>
  );
}
