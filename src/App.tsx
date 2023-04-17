import { useState } from "react";
import Editor from "./components/Editor";


function App() {
  const [count, setCount] = useState(0);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="Html"
          value={html}
          onChange={(code: string) => setHtml(code)}
        />
        <Editor
          language="css"
          displayName="Css"
          value={css}
          onChange={(code: string) => setCss(code)}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={(code: string) => setJs(code)}
        />
      </div>
      <div className="pane">Hello World</div>
    </>
  );
}

export default App;
