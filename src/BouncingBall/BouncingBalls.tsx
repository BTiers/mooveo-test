import React, { useState } from "react";

import BouncingBallCore from "./BouncingBallCore";

interface BouncingBallsProps {
  count: number
};

const BouncingBalls: React.FC<BouncingBallsProps> = ({count}) => {
  const [initialBounceTime] = useState(Date.now());
  
 const newArr = new Array(count).fill(1);

  return (
    <div className="z-0 relative h-screen w-screen bg-transparent">
      {newArr.map((e) => <BouncingBallCore initialBounceTime={initialBounceTime} />)}
    </div>
  );
};

export default BouncingBalls;
