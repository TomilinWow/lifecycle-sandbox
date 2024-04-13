
/**
 * Разбиение кода на блоки компоненты
 * */

const patternFullComponent = /(const \w+ =\s*\(\s*[^)]*\)\s*=>\s*\{|function \w+\s*\(\s*[^)]*\)\s*\{)/;
const patternForName = /(?:const|function)\s+([A-Za-z0-9_]+)\s*(?:=\s*\(\)\s*=>|\()/;

function reformatComponents(sourceStr: string) {

  let jsx = sourceStr;
  const componentsStringJsx: string[] = [];

  function processJsx(jsx: string) {
    const matches = jsx.match(patternForName);
    const componentName = matches ? matches[1] : 'Component';
    let modifiedJsx = jsx.replace(patternFullComponent, '{');
    const symbolsLeft = ['{', '('];
    const symbolsRight = ['}', ')'];
    const str = modifiedJsx.split('');
    const stack = [];
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
      modifiedJsx = modifiedJsx.slice(1)
      newStr += str[i];
      if (symbolsLeft.includes(str[i])) {
        stack.push(str[i]);
      } else if (symbolsRight.includes(str[i])) {
        const symbol = stack.pop();
        if (symbol === '{' && stack.length === 0) {
          const index = newStr.indexOf('{')
          const stringComponent = `() => { \n const ${componentName} = () => { \n${newStr.substring(index + 1)}; \n return <${componentName}/> }`
          componentsStringJsx.push(stringComponent);
          newStr = '';
          break;
        }
      }
    }

    return modifiedJsx
  }

  while (jsx.match(patternFullComponent)) {
    jsx = processJsx(jsx);
  }
  return componentsStringJsx
}

const componentRegex = /((const|function)\s+\w+\s*=\s*\((.*?)\)\s*=>\s*\{|function\s+\w+\s*\((.*?)\)\s*\{)/g;
const lastPositionComponent = /(<\/[^\s>]+>)(\s*)([)}])/gs;
/**
 * Получение отформатированного jsx кода в строке
 * */
export function transformJSX(sourceJSX: string) {


  const insertString = `
  const {useState, useEffect, useRef, useMemo, useTracer, useContext, useReducer, TraceLog, useLayoutEffect, useInsertionEffect, useCallback} = window.globalHooks;
    const { TracePanel } = useTracer();
  `;

  const updatedJsx = sourceJSX.replace(componentRegex, (match) => match + insertString);

  const addTracePanel = (jsx: string) => {
    return jsx.replace(lastPositionComponent, `<TracePanel />$1$2$3`);
  };
  const finalJSX = addTracePanel(updatedJsx);
  return reformatComponents(finalJSX);
}
