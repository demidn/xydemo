// @ts-nocheck
'use client';
/* eslint:disable */

import { Toolbar } from "@/components/Toolbar";
import { useEffect, useRef, WheelEvent } from "react";
import { select, zoom } from "d3";
import { Textarea } from "@/components/Textarea";
import { usePreventWheelZoom2Event } from "@/components/usePreventWheelZoom2Event";

export default function Demo1() {
  const elementRef = useRef<HTMLDivElement>(null);
  const elemRef = useRef<HTMLDivElement>(null);
  // usePreventWheelZoom2Event(elemRef)

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

  const foo = (evt: WheelEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    console.log('Capture wheel', target.tagName === 'TEXTAREA');
    if (target.tagName === 'TEXTAREA') {
      evt.stopPropagation();
    }
  };

  return (
    <div className="w-full h-full overflow-hidden" ref={elementRef} onWheelCapture={foo}>
      <div ref={elemRef} className="w-full h-full bg-cyan-3">
        Здесь
        <Textarea />

      </div>
      {/*<ReactFlow*/}
      {/*  fitView*/}
      {/*  colorMode={'dark'}*/}
      {/*  maxZoom={1}*/}
      {/*  minZoom={0.1}*/}
      {/*  nodesDraggable*/}
      {/*  nodes={nodes}*/}
      {/*  nodeTypes={NODE_TYPES}*/}
      {/*  onNodesChange={onNodesChange}*/}
      {/*>*/}
      {/*  <Background className="bg-gray-1 dark:bg-none" />*/}
      {/*  /!*<Controls style={{ marginBottom: '24px' }} showInteractive={false} />*!/*/}
      {/*  <ZoomControls />*/}
        <Toolbar className="top-[60px] left-2"></Toolbar>

      {/*  <MiniMap pannable zoomable className="flow-minimap hidden sm:block" nodeClassName="flow-minimap-node" />*/}
      {/*</ReactFlow>*/}

      {/*<Card1 className="fixed top-[178px] left-[20px]" />*/}
      {/*<Card2 className="fixed top-28 left-[240px]" />*/}
      {/*<Card3 className="fixed top-28 left-[460px]" />*/}
      {/*<Card4 className="fixed top-[320px] left-[20px]" />*/}
    </div>
  );
}
