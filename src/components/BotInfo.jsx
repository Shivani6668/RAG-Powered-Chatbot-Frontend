import React from 'react';
import '../styles/botinfo.scss';

const BotInfo = () => {
  return (
    <div className="bot-info">
      <div className="bot-avatar">
        <video
          src="/video.mp4"  
          autoPlay
          loop
          muted
          playsInline
          className="bot-video"
        />
      </div>

      <h2>Hello!</h2>
      <p>
        My name is <strong>Robbie</strong><br />
        and I'm here to help you with news updates!
      </p>
      <button>Ask Robbie</button>
    </div>
  );
};

export default BotInfo;
