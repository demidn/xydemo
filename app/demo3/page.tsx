// @ts-nocheck
'use client';
/* eslint:disable */

import { Background, MiniMap, ReactFlow, useNodesState } from '@xyflow/react';
import { NODE_TYPES } from '@/app/nodeTypes';
import { Toolbar } from '@/components/Toolbar';
import { NODES } from '@/app/demo1/nodes';
import { useEffect, useRef, useState, WheelEvent } from "react";
import { ZoomControls } from '@/components/ZoomControls';
import { select, zoom } from "d3";
import { Textarea } from "@/components/Textarea";
import { usePreventZoomWheelEvent } from "@/components/usePreventWheelZoomEvent";

export default function Demo1() {
  const [nodes, , onNodesChange] = useNodesState(NODES);
  const elementRef = useRef<HTMLDivElement>(null);
  const elemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elemRef.current;
    if(!el){
      return;
    }
    const zoomed = ({transform}) => {
      console.log('zooming');
    }

    const z = zoom()
        .scaleExtent([0.5, 32])
        .on("zoom", zoomed);

    const sel = select(el);
    // @ts-ignore
    sel.call(z)
        //.on("wheel.zoom", null);

  }, [])

  // const foo = (evt: WheelEvent<HTMLElement>) => {
  //   const target = evt.target as HTMLElement;
  //   console.log('Capture wheel', target.tagName === 'TEXTAREA');
  //   if (target.tagName === 'TEXTAREA') {
  //     evt.stopPropagation();
  //   }
  // };


  return (
    <div className="w-full h-full overflow-hidden">
      <div ref={elemRef} className="w-full h-full bg-red-6">

        <div ref={elementRef} >
          <Textarea />
        </div>

      </div>
      <Toolbar className="top-[60px] left-2"></Toolbar>
    </div>
  );
}
