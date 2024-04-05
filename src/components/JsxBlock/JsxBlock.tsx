import React, { FC } from 'react';
import styles from "@/components/JsxBlock/jsx-block.module.css"
import { JsxRender } from "@/components/JsxRender/JsxRender";

interface IJsxBlock {
  jsxBlocks: string[]
}
export const JsxBlock: FC<IJsxBlock> = ({jsxBlocks}) => {
  return <>
    {!!jsxBlocks.length
      ? <>
        <div className={styles.codeBlock}>
          {
            jsxBlocks.map((block) => <JsxRender key={block} content={block} />)
          }
        </div>
      </>
      : <div className={styles.emptyBlock}>
        Content not available, write code and run it.
      </div>
    }
  </>
};
