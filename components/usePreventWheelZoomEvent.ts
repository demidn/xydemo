import { RefObject, useEffect } from 'react';
import { isRefObject } from './isRefObject';
import { select, zoom } from "d3";

export function usePreventZoomWheelEvent(elementOrRef: HTMLElement | RefObject<HTMLElement | null> | null) {
  const elem = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
  useEffect(() => {
    if (!elem) {
      return;
    }
// console.log(elem)
    select(elem).call(zoom()).on('wheel.zoom', null)
  }, [elem]);
}
