'use client';

import { Background, ReactFlow, useNodesState } from '@xyflow/react';
import { NODE_TYPES } from '@/app/nodeTypes';
import { Card1 } from "@/components/Card1";
import { Card2 } from "@/components/Card2";
import { Card3 } from "@/components/Card3";
import { Toolbar } from "@/components/Toolbar";
import { Card4 } from "@/components/Card4";

const NODES = [
    { id: '1', data: {}, type: 'node1', width: 200, height: 100, position: { x: 0, y: 0 } },
    { id: '2', data: {}, type: 'node2', width: 200, height: 100, position: { x: 220, y: 0 } },
    { id: '3', data: {}, type: 'node3', width: 200, height: 100, position: { x: 440, y: 0 } }
];

export default function Demo1() {
  const [nodes, , onNodesChange] = useNodesState(NODES);
  return (
    <div className="w-full h-full">
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
      </ReactFlow>

      <Toolbar className="top-2 left-2"></Toolbar>

      <Card1 className="fixed top-28 left-[20px]" />
      <Card2 className="fixed top-28 left-[240px]" />
      <Card3 className="fixed top-28 left-[460px]" />
      <Card4 className="fixed top-[320px] left-[20px]" />
    </div>
  );
}
