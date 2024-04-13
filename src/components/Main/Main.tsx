import styles from "@/components/Main/main.module.css"
import React, { useCallback, useState } from 'react';
import { ControlPanel } from "@/components/ControlPanel/ControlPanel";
import { AppCodeEditor } from "@/components/AppCodeEditor/AppCodeEditor";
import { JsxBlock } from "@/components/JsxBlock/JsxBlock";
import { TraceBlock } from "@/components/TraceBlock/TraceBlock";
import { transformJSX } from "@/utils/transformJSX";
import { TypeExamples } from "@/models/models";
import { strCounter, strUserList } from "@/data/data";

export const Main = () => {

  const [code, setCode] = useState(
    ``
  );
  const [jsxBlocks, setJsxBlocks] = useState<string[]>([])

  const runCode = useCallback(() => {
    if (code) {
      try {
        setJsxBlocks(transformJSX(code))
      } catch (e) {
        alert('Error')
      }
    }
  }, [code])

  const onHandleChangeSelect = useCallback((value: TypeExamples) => {
    if (TypeExamples.COUNTER === value) {
      setCode(strCounter)
    } else {
      setCode(strUserList)
    }
  }, [])

  const handleChangeCode = useCallback((value: string) => {
    setCode(value)
  }, [])


  return <div className={styles.wrapper}>
    <div id="home-element" className={`${styles.column} ${styles.jsxColumn}`}>
      <ControlPanel runCode={runCode} setSelectValue={onHandleChangeSelect}/>
      <AppCodeEditor code={code} handleChangeCode={handleChangeCode} />
    </div>
    <div id="new" className={styles.column}>
      <JsxBlock jsxBlocks={jsxBlocks}/>
    </div>
    <div id="home-element" className={styles.column}>
      <TraceBlock jsxBlocks={jsxBlocks}/>
    </div>
  </div>
};
