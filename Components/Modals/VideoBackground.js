import React from 'react';
import ProfilePageVedio from '../../public/Video/ProfilePage.mp4'

const VideoBackground = ({ videoPath }) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={ProfilePageVedio} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;