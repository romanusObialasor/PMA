import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PracticeComp = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <CopyToClipboard text={value} onCopy={() => setCopied({ copied: true })}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>
      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
};

export default PracticeComp;
