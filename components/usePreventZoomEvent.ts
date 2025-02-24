import { RefObject, useEffect } from 'react';
import { isRefObject } from './isRefObject';
import { select, zoom } from "d3";

export function usePreventZoomEvent(elementOrRef: HTMLElement | RefObject<HTMLElement | null> | null) {
  const elem = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
  useEffect(() => {
    if (!elem) {
      return;
    }
    // console.log('Preventing ', elem)
    select(elem).call(zoom());
  }, [elem]);
}
