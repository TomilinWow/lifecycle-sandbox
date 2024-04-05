/**
 * Разбиение кода на блоки компоненты
 * */
function reformatComponents(sourceStr: any) {

  let jsx = sourceStr;
  const pattern = /(const \w+ =\s*\(\s*[^)]*\)\s*=>\s*\{|function \w+\s*\(\s*[^)]*\)\s*\{)/;

  const componentsStringJsx: any[] = [];

  function processJsx(jsx: string) {
    let modifiedJsx = jsx.replace(pattern, '{');
    const symbolsLeft = ['{', '('];
    const symbolsRight = ['}', ')'];
    let str = modifiedJsx.split('');
    const stack = [];
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
      modifiedJsx = modifiedJsx.slice(1)
      newStr += str[i];
      if (symbolsLeft.includes(str[i])) {
        stack.push(str[i]);
      } else if (symbolsRight.includes(str[i])) {
        let symbol = stack.pop();
        if (symbol === '{' && stack.length === 0) {
          const index = newStr.indexOf('{')
          componentsStringJsx.push(`() => { \n${newStr.substring(index + 1)}`);
          newStr = '';
          break;
        }
      }
    }

    return modifiedJsx
  }

  while (jsx.match(pattern)) {
    jsx = processJsx(jsx);
  }
  return componentsStringJsx
}

/**
 * Получение отформатированного jsx кода в строке
 * */
export function transformJSX(sourceJSX: string) {


  const insertString = `
  const {useState, useEffect, useRef, useMemo, useTracer, useContext, useReducer, TraceLog, useLayoutEffect, useInsertionEffect, useCallback} = window.globalHooks;
  const { TracePanel } = useTracer();`;

  const componentRegex = /((const|function)\s+\w+\s*=\s*\((.*?)\)\s*=>\s*\{|function\s+\w+\s*\((.*?)\)\s*\{)/g;
  const updatedJsx = sourceJSX.replace(componentRegex, (match) => match + insertString);

  const addTracePanel = (jsx: any) => {
    return jsx.replace(/(<\/[^\s>]+>)(\s*)([\)}])/gs, `<TracePanel />$1$2$3`);
  };
  const finalJSX = addTracePanel(updatedJsx);
  return reformatComponents(finalJSX);
}
