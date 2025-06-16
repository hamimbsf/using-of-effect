import "./videoPlayer.css";

import { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  return <video ref={ref} src={src} className="video" controls />;
};

export default VideoPlayer;
