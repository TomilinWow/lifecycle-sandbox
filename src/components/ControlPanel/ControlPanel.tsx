import React from 'react';
import styles from "@/components/ControlPanel/control-panel.module.css";
import { TypeExamples } from "@/models/models";

interface IAppCodeEditor {
  runCode: () => void;
  setSelectValue: (value: TypeExamples) => void;
}
export const ControlPanel: React.FC<IAppCodeEditor> = ({
  runCode,
  setSelectValue,
}) => {

  return (
    <div className={styles.panel}>
      <select onChange={(e) => setSelectValue(e.target.value as TypeExamples)} className={styles.select}>
        <option className={styles.selected} selected disabled>Examples</option>
        <option>Counter</option>
        <option>UserList</option>
      </select>
      <button onClick={runCode} className={styles.button}>
        Run
      </button>
    </div>
  )
};
