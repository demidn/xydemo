import { RefObject, useEffect } from 'react';
import { select, zoom } from 'd3';
import { isRefObject } from './isRefObject';

export function usePreventZoomEvent(elementOrRef: HTMLElement | RefObject<HTMLElement | null> | null) {
  const elem = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
  useEffect(() => {
    if (!elem) {
      return;
    }
// console.log('Preventing ', elem)
    // select(elem).call(zoom());
  }, [elem]);
}
