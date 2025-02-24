import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';
import { usePreventZoomWheelEvent } from '@/components/usePreventWheelZoomEvent';

export function FlowNode4({ selected }: NodeProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  usePreventZoomWheelEvent(elementRef);

  const [longText, setLongText] = useState(`dsfdsa f ds f ds fsd f 
  dsf sdf sdf sdfsdfsdfsdf 
  dsfsd
  fsdfdsf
  dsfdsfads
  fadsf
  sad
  fasdfsd
  dsaf asd f sdf sd f`);

  return (
    <div className={clsx('p-5 bg-panel-translucent w-[400px] nodrag nowheel', { 'border border-1 border-cyan-7': selected })} ref={elementRef}>
      <div>
        NODE3: Added more optimizations to stop events
        <textarea className="w-full" value={longText} rows={4} onChange={(e) => setLongText(e.target.value)}></textarea>
      </div>
    </div>
  );
}
