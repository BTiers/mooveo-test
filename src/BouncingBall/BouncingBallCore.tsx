import React, { useMemo } from "react";

const MS_TO_BOUNCE = 2000;

function getRandomColor() {
  return `#${crypto.getRandomValues(new Uint16Array(1))[0].toString(16).padStart(8, "0")}`;
}

function timeToPositionPercent(startTime: number, offset: number) {
  const now = Date.now();
  const timeDiff = now - startTime + offset;

  const isGoingUp = (timeDiff / MS_TO_BOUNCE) % 2 > 1;
  const diff = timeDiff % MS_TO_BOUNCE;

  const percentage = (diff / MS_TO_BOUNCE) * 100;

  return `calc(((${percentage}vh)) * ${isGoingUp ? 1 : -1} + ${isGoingUp ? "0px" : "100vh"})`;
}


type BouncingBallCoreProps = any;

const BouncingBallCore: React.FC<BouncingBallCoreProps> = ({ initialBounceTime }) => {
  const left = useMemo(()=> `calc(${Math.random()} * 100vw)`, []);
  const offset = useMemo(() => Math.random() * 10000, []);
  const color = useMemo(() => getRandomColor(), []);

  return (
    <div
      className="w-36 h-36 absolute rounded-full z-0"
      style={{
        backgroundColor: color,
        bottom: timeToPositionPercent(initialBounceTime, offset),
        left,
      }}
    />
  );
};

export default BouncingBallCore;
