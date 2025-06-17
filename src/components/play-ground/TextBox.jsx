import React, { useEffect, useState } from "react";

const TextBox = () => {
  const [text, setText] = useState("a");

  useEffect(() => {
    function onTimeOut() {
      console.log("" + text);
    }
    console.log("Schedule " + text + " log");
    const timeOutId = setTimeout(onTimeOut, 300);

    return () => {
      console.log("Cancel " + text + " log");
      clearTimeout(timeOutId);
    };
  }, [text]);

  return (
    <div className="textbox-card">
      <h1 className="textbox-title">What to log:</h1>
      <input
        className="textbox-input"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <p className="textbox-preview">{text}</p>
    </div>
  );
};

export default TextBox;
