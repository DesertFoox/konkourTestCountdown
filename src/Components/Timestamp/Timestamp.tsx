import React, { useState, useEffect } from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import TimeConvertor from "../../Utils/TimeConvertor";
interface ITimestamp {
  dur: number;
  isComplete: boolean;
  isMinute: boolean;
}

const Timestamp: React.FC<ITimestamp> = ({ dur, isComplete, isMinute }) => {
  return (
    <>
      {isComplete ? (
        <CountdownCircleTimer
          isPlaying
          duration={isMinute ? Math.floor(dur * 60) : dur}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
          onComplete={() => [true, 1000]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      ) : (
        <CountdownCircleTimer
          isPlaying
          duration={isMinute ? Math.floor(dur * 60) : dur}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      )}
    </>
  );
};

export default Timestamp;
