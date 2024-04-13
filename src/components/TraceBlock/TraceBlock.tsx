import styles from "@/components/TraceBlock/trace-block.module.css"
import React, { FC } from 'react';
import { TraceLog } from "react-hook-tracer";

interface ITraceBlock {
  jsxBlocks: string[]
}
export const TraceBlock: FC<ITraceBlock> = ({jsxBlocks}) => {

  return <>
    {
      jsxBlocks.length > 0
        ? <div className={styles.trace}>
          <TraceLog />
      </div>
        : <div className={styles.emptyBlock}>
          Trace log not available.
        </div>
    }
    </>
};
