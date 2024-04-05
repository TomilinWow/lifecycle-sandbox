import React from 'react';
import styles from "@/components/AppCodeEditor/app-code-editor.module.css";
import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";


interface IAppCodeEditor {
  code: string;
  handleChangeCode: (value: string) => void;
}
export const AppCodeEditor: React.FC<IAppCodeEditor> = ({
  code,
  handleChangeCode,
}) => {

  return (
    <div>
      <Editor
        className={styles.codeEditor}
        value={code}
        onValueChange={value => handleChangeCode(value)}
        highlight={code => highlight(code, languages.js)}
        placeholder={"Please enter JSX code."}
        padding={15}
        style={{
          height: 'calc(100vh - 120px)',
          color: '#232323',
          overflow: 'auto',
          fontSize: 16,
          backgroundColor: '#fefaf3',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          border: '3px solid #bb976d',
          borderRadius: 8,
        }}
      />
    </div>
  );
};
