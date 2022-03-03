import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import CompactCard from "../components/Card/CompactCard";

// Only loads the YouTube player

const Video = () => {
  useEffect(() => {
    const url = new URL(window.location);
    const id = url.search.substring(3);
    // get all the details with this id
    console.log(id);
  }, []);

  return (
    <div className="Video">
      <div className="video-container">
        <ReactPlayer
          className="Video_player"
          url="https://www.youtube.com/watch?v=Law7wfdg_ls"
          // url={[{ src: "../assets/web.mov", type: "video/mov" }]}
        />
      </div>

      {/* LIST of vidoes */}
      <div className="Video_recommended-lists">
        <CompactCard />
      </div>

      {/* comments */}
      <div className="Video_comments">
        <h1>comments</h1> 


      </div>
    </div>
  );
};

export default Video;
