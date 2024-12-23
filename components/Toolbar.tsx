import { clsx } from 'clsx';

export function Toolbar({ className }: { className?: string }) {
  return (
    <div className={clsx('fixed flex items-center justify-center top-2 left-2 bg-panel-translucent h-[40px] w-[300px]', className)}>
      Toolbar simulation
    </div>
  );
}
