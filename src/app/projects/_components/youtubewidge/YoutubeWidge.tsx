// components/YouTubeAudio.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./youtubewidge.module.css";
import Image from "next/image";
import {Play} from 'lucide-react';
import {Pause} from 'lucide-react';

type YouTubeWidgeProps = {
  videoId: string;
  start?: number; // seconds
  end?: number;   // seconds
};

export default function YoutubeWidge({ videoId, start = 0, end }: YouTubeWidgeProps) {
  const [playing, setPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const baseUrl = `https://www.youtube.com/embed/${videoId}`;

  const buildUrl = () => {
    const params = new URLSearchParams({
      autoplay: "1",
      start: String(start),
      controls: "0",
      enablejsapi: "1", // Enable JavaScript API for postMessage communication
    });
    if (end) {
      params.set("end", String(end));
    } 
    return `${baseUrl}?${params.toString()}`;
  };

  // Listen for messages from YouTube iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from YouTube
      if (event.origin !== "https://www.youtube.com") {
        return;
      }

      try {
        const data = JSON.parse(event.data);
        
        // Handle player state changes
        if (data.event === "infoDelivery" && data.info) {
          const playerState = data.info.playerState;
          
          // YouTube player states:
          // -1: unstarted
          // 0: ended
          // 1: playing
          // 2: paused
          // 3: buffering
          // 5: video cued
          
          if (playerState === 0) {
            // Video ended
            setPlaying(false);
          } else if (playerState === 1) {
            // Video is playing
            setPlaying(true);
          } else if (playerState === 2) {
            // Video is paused
            setPlaying(false);
          }
        }
      } catch (error) {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const play = () => {
    if (iframeRef.current) {
      iframeRef.current.src = buildUrl();
      setPlaying(true)
    }
  };

  const stop = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "";
      setPlaying(false);
    }
  };

  const restart = () => {
    stop();
    setTimeout(play, 100); // ensure iframe resets
  };

  // Send listening message to YouTube player when iframe loads
  const handleIframeLoad = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage('{"event":"listening"}', '*');
      setIsReady(true);
    }
  };

  return (
    <div className={styles.case}>
      {/* Hidden YouTube iframe (only for audio) */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        style={{ display: "none" }}
        allow="autoplay"
        title="YouTube Audio Player"
        onLoad={handleIframeLoad}
      />
      <div className={styles.portrait}>
      < Image 
      src="/images-2.jpg"
      alt="Sundar"
      fill
      className={styles.fill}

      />

      </div>

      {/* Controls */}
      <div className={styles.controls}>

      <button onClick={play}>
        {playing ?  <Pause color="grey" size={18} /> : <Play color="grey" size={18} /> }
       
      </button>
      {/* <button onClick={stop}>Stop</button>
      <button onClick={restart}>Restart</button> */}

      </div>

    </div>
  );
}
