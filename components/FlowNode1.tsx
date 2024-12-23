import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';

export function FlowNode1({ selected }: NodeProps) {
  return (
    <div className={clsx('p-5 bg-panel-translucent', { 'border border-1 border-cyan-7': selected })}>
      <div>
        NODE1: Just a simple card in xyflow. Does not prevent anything, and actually as it is inside xy should not allow
        wheel zoom
      </div>
    </div>
  );
}
