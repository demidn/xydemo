import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

export function FlowNode3({ selected }: NodeProps) {
  const elementRef = useRef<HTMLDivElement>(null);

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
    <div className={clsx('p-5 bg-panel-translucent w-[400px]', { 'border border-1 border-cyan-7': selected })}>
      <div>
        AAAANODE3: Added more optimizations to stop events
        <div ref={elementRef} className="nowheel nodrag">
          <textarea
            className="w-full"
            value={longText}
            rows={4}
            onChange={(e) => setLongText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
