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

export default function Demo1() {
  const [nodes, , onNodesChange] = useNodesState(NODES);
  const elementRef = useRef<HTMLDivElement>(null);
  const elemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elem = elementRef.current;
    if (!elem) {
      return;
    }

    // console.log(elementRef);
    // const sel = select(elem).call(zoom).on('touchstart', () => { console.log('gggg')});
    // sel.call(zoom());
    // consoles.log('SSS',sel)
  }, []);

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

  const [v, setV] = useState(`Long value \n\n long value \n\n long value \n\n long value \n\n long value \n\n`)

  return (
    <div className="w-full h-full overflow-hidden" ref={elementRef} onWheelCapture={foo}>
      <div ref={elemRef} className="w-full h-full bg-cyan-3">

        <textarea value={v} onChange={evt => setV(evt.target.value)} className="mt-[300px] h-[100px] w-[200px]">
        </textarea>

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
        <Toolbar className="top-2 left-2"></Toolbar>

      {/*  <MiniMap pannable zoomable className="flow-minimap hidden sm:block" nodeClassName="flow-minimap-node" />*/}
      {/*</ReactFlow>*/}

      {/*<Card1 className="fixed top-[178px] left-[20px]" />*/}
      {/*<Card2 className="fixed top-28 left-[240px]" />*/}
      {/*<Card3 className="fixed top-28 left-[460px]" />*/}
      {/*<Card4 className="fixed top-[320px] left-[20px]" />*/}
    </div>
  );
}
