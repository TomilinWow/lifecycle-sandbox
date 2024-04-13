import React, { FC } from 'react';
import styles from "@/components/JsxBlock/jsx-block.module.css"
import { JsxRender } from "@/components/JsxRender/JsxRender";
import { useContext } from "react-hook-tracer";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Themes } from "@/types/theme";

interface IJsxBlock {
  jsxBlocks: string[]
}
export const JsxBlock: FC<IJsxBlock> = ({jsxBlocks}) => {
  const [theme] = useContext(ThemeContext);

  return <>
    {jsxBlocks.length > 0
      ? <>
        <div className={styles.codeBlock + (theme === Themes.DARK ? ' ' + styles.darkBlock : '')}>
          {
            jsxBlocks.map((block) => <JsxRender key={block} content={block} />)
          }
        </div>
      </>
      : <div className={styles.emptyBlock + (theme === Themes.DARK ? ' ' + styles.darkBlock : '')}>
        Content is not available, write code and run it.
      </div>
    }
  </>
};
