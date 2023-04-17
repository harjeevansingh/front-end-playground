import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "./init";

import { Controlled as ControlledEditor } from "react-codemirror2";

interface EditorProps {
  displayName: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  const { displayName, language, value, onChange } = props;

  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value);
  };

  return (
    <div>
      <div>
        {displayName}
        <button>I/O</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        //   lint: true, // Throwing error
        }}
      />
    </div>
  );
};

export default Editor;
