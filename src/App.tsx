import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [sourceCode, setSourceCode] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSourceCode(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

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
      <div className="pane">
        <iframe
          srcDoc={sourceCode}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
