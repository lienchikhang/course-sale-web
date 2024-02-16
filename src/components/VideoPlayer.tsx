import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Khai báo YouTube API
declare global {
  interface Window {
    onYouTubeIframeAPIReady: any;
  }
}

// Component chứa video
const VideoPlayer: React.FC<{ videoId: string; handlePlay: () => void }> = ({
  videoId,
  handlePlay,
}) => {
  const [playerReady, setPlayerReady] = useState(false);
  let player: any;

  const handlePlayVideo = () => {
    handlePlay();
    if (playerReady) {
      player.playVideo();
    }
  };

  useEffect(() => {
    // Load script YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Hàm được gọi khi API được tải
    window.onYouTubeIframeAPIReady = () => {
      // Tạo một instance của player
      player = new YT.Player("player", {
        height: "400",
        width: "600",
        videoId: videoId,
        events: {
          onReady: () => setPlayerReady(true),
        },
      });
    };
  }, [videoId]);

  return (
    <div>
      <div
        id="playVideoButton"
        className="video-react__play"
        onClick={handlePlayVideo}
      >
        <PlayArrowIcon />
      </div>
      <div id="player" className="video__thumbnail"></div>
    </div>
  );
};

export default VideoPlayer;
