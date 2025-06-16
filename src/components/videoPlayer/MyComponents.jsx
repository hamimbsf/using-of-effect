import "./videoPlayer.css";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const MyComponents = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Video Player</h1>

        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />

        <button
          className="toggle-button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default MyComponents;
