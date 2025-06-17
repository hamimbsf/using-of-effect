import "./playGround.css";
import { useState } from "react";
import TextBox from "./TextBox";

const PlayGround = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="playground-container">
      <button className="toggle-button" onClick={() => setShow((e) => !e)}>
        {show ? "Unmount" : "Mount"} the Components
      </button>
      {show && <TextBox />}
    </div>
  );
};

export default PlayGround;
