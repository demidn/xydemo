import { RefObject, useEffect } from 'react';
import { isRefObject } from './isRefObject';

export function usePreventZoomWheelEvent(elementOrRef: HTMLElement | RefObject<HTMLElement | null> | null) {
  const elem = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
  useEffect(() => {
    if (!elem) {
      return;
    }

    // select(elem).call(zoom()).on('.zoom', null)
  }, [elem]);
}
