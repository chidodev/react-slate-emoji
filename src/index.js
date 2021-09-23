import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor } from "slate-react";
import { Value } from "slate";
import value from "./value.json";
import "./styles.css";

const initialValue = Value.fromJSON(value);

function App() {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ value }) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Slate Editor</h1>
      <Editor className="Editor" value={value} onChange={handleChange} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
