import React, { useState } from "react";

import BouncingBallCore from "./BouncingBallCore";

type BouncingBallsProps = Record<string, never>;

const BouncingBalls: React.FC<BouncingBallsProps> = () => {
  const [initialBounceTime] = useState(Date.now());

  return (
    <div className="z-0 relative h-screen w-screen bg-transparent">
      <BouncingBallCore initialBounceTime={initialBounceTime} />
    </div>
  );
};

export default BouncingBalls;
