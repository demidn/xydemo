import { Controls } from "@xyflow/react";
import { useRef } from "react";
import { usePreventZoomEvent } from "@/components/usePreventZoomEvent";

export function ZoomControls(){
  const elementRef = useRef<HTMLDivElement>(null)
  usePreventZoomEvent(elementRef);
  return <div ref={elementRef}><Controls style={{ marginBottom: '24px' }} showInteractive={false} /></div>
}
