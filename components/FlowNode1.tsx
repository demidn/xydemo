import { Pencil1Icon } from '@radix-ui/react-icons';
import { Box, Grid, IconButton } from '@radix-ui/themes';
import { NodeProps } from '@xyflow/react';
import { clsx } from 'clsx';
import { AssistantMessage, ClientTextEvent } from "@/components/AssistantMessage";

export function FlowNode1({ selected, data }: NodeProps) {

  const events = data.value as ClientTextEvent[] ?? [];
  return (
    <div className={clsx('p-5 bg-panel-translucent w-[450px]', { 'border border-1 border-cyan-7': selected })}>
      <Grid rows="1fr auto" overflow="hidden">
        <div style={{ overflow: 'auto' }}>
          {events.map((event) => {
            return (
              <Box key={event.id} mb="3" className="p-[2px] relative group">
                <IconButton
                  size="1"
                  color="gray"
                  variant="surface"
                  className="sticky z-[1] top-0 left-0 -mt-[24px] hidden group-hover:flex"
                >
                  <Pencil1Icon />
                </IconButton>
                <AssistantMessage message={event} className="" />
              </Box>
            );
          })}
        </div>
      </Grid>
    </div>
  );
}
