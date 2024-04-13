// @ts-ignore
import StringToReactComponent from "string-to-react-component";
import React, { FC, useEffect } from "react";


interface JsxRender {
  content: string
}
export const JsxRender: FC<JsxRender> = ({ content}) => {
  const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);

  useEffect(() => {
     try{
       const script = document.createElement("script");
       script.src = "https://unpkg.com/@babel/standalone/babel.min.js";
       script.async = false;
       document.body.appendChild(script);
       script.onload = () => setIsScriptLoaded(true);
     } catch (e) {
       alert(e)
     }
   }, []);

  return (<>
        {isScriptLoaded && <StringToReactComponent>
          {content}
        </StringToReactComponent>
        }
      </>
  );
};
