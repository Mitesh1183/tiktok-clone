import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      console.log(videoRef.current.play())
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
    <VideoHeader/>
      <video
        crossorigin="anonymous"
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
