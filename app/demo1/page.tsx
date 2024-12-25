'use client';

import { Background, MiniMap, ReactFlow, useNodesState } from '@xyflow/react';
import { NODE_TYPES } from '@/app/nodeTypes';
import { Toolbar } from '@/components/Toolbar';
import { NODES } from '@/app/demo1/nodes';
import { useEffect, useRef } from 'react';
import { ZoomControls } from "@/components/ZoomControls";

export default function Demo1() {
  const [nodes, , onNodesChange] = useNodesState(NODES);
  const elementRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="w-full h-full overflow-hidden" ref={elementRef}>
      <ReactFlow
        fitView
        colorMode={'dark'}
        maxZoom={1}
        minZoom={0.1}
        nodesDraggable
        nodes={nodes}
        nodeTypes={NODE_TYPES}
        onNodesChange={onNodesChange}
      >
        <Background className="bg-gray-1 dark:bg-none" />
        {/*<Controls style={{ marginBottom: '24px' }} showInteractive={false} />*/}
        <ZoomControls />

        <MiniMap pannable zoomable className="flow-minimap hidden sm:block" nodeClassName="flow-minimap-node" />
      </ReactFlow>

      <Toolbar className="top-2 left-2"></Toolbar>

      {/*<Card1 className="fixed top-[178px] left-[20px]" />*/}
      {/*<Card2 className="fixed top-28 left-[240px]" />*/}
      {/*<Card3 className="fixed top-28 left-[460px]" />*/}
      {/*<Card4 className="fixed top-[320px] left-[20px]" />*/}
    </div>
  );
}
