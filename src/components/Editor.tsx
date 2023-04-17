import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "../init";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

interface EditorProps {
  displayName: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = React.useState(true);

  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="expand-collapse-btn"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
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
          lint: true,
        }}
      />
    </div>
  );
};

export default Editor;
