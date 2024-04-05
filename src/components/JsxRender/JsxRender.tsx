// @ts-ignore
import StringToReactComponent from "string-to-react-component";
import React, {Fragment} from "react";
import {useLayoutEffect} from "react-hook-tracer";


export const JsxRender = (props: any) => {
  const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);

  useLayoutEffect(() => {
   setTimeout(() => {
     try{
       const script = document.createElement("script");
       script.src = "https://unpkg.com/@babel/standalone/babel.min.js";
       script.async = false;
       document.body.appendChild(script);
       script.onload = () => setIsScriptLoaded(true);
     } catch (e) {
       console.log(e)
     }
   }, 1000)
  }, []);

  return (
    <>
      {isScriptLoaded && <StringToReactComponent>
        {props.content}
      </StringToReactComponent>
      }
    </>
  );
};
