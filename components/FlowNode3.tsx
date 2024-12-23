import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { useRef } from "react";
import { usePreventZoomWheelEvent } from "@/components/usePreventWheelZoomEvent";

export function FlowNode3({ selected }: NodeProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomWheelEvent(elementRef);

  return (
    <div className={clsx('p-5 bg-panel-translucent', { 'border border-1 border-cyan-7': selected })} ref={elementRef  }>
      <div>
        NODE3: Added more optimizations to stop events
      </div>
    </div>
  );
}
