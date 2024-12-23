import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { useRef } from "react";
import { usePreventZoomEvent } from "@/components/usePreventZoomEvent";

export function FlowNode2({selected }: NodeProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomEvent(elementRef);

  return (
    <div className={clsx('p-5 bg-panel-translucent', { 'border border-1 border-cyan-7': selected })} ref={elementRef}>
      <div>
        NODE2: Added some stops for zoom events here
      </div>
    </div>
  );
}
