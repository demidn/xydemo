import { RefObject, useEffect } from 'react';
import { select, zoom } from "d3";
import { isRefObject } from './isRefObject';
import { noevent } from "@/components/noevent";

export function usePreventWheelZoom2Event(elementOrRef: HTMLElement | RefObject<HTMLElement | null> | null) {
  const elem = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
  useEffect(() => {
    if (!elem) {
      return;
    }

    select(elem).call(zoom()).on('wheel.zoom', evt => {
      noevent(evt);
    })
  }, [elem]);
}
