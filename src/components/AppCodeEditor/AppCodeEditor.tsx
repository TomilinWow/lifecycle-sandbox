import React from 'react';
import styles from "@/components/AppCodeEditor/app-code-editor.module.css";
import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from 'prismjs';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useContext } from "react-hook-tracer";
import { ThemeContext } from "@/providers/ThemeProvider";
import { Themes } from "@/types/theme";


interface IAppCodeEditor {
  code: string;
  handleChangeCode: (value: string) => void;
}
export const AppCodeEditor: React.FC<IAppCodeEditor> = ({
  code,
  handleChangeCode,
}) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Editor
        className={styles.codeEditor}
        value={code}
        onValueChange={value => handleChangeCode(value)}
        highlight={code => highlight(code, languages.js)}
        placeholder="Please enter JSX code."
        padding={15}
        style={{
          height: 'calc(100vh - 120px)',
          color: theme === Themes.LIGHT ? '#232323' : 'white',
          overflow: 'auto',
          fontSize: 16,
          backgroundColor: theme === Themes.LIGHT ? '#fefaf3' : '#000000',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          border: '3px solid #bb976d',
          borderRadius: 8,
        }}
      />
    </div>
  );
};
