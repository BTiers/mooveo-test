import React, { useState } from "react";

import BouncingBalls from "./BouncingBalls";

const RenderCount: React.FC<{ count: number }> = ({ count }) => {
  return (
    <pre className="absolute z-10 rounded-xl w-full max-w-xs m-4 overflow-hidden bg-gray-800 text-gray-200 py-8 px-4">
      Render count: {count}
    </pre>
  );
};

type BounceStationProps = Record<string, never>;

const BounceStation: React.FC<BounceStationProps> = () => {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => triggerRerender(rerenderCount + 1), 10);

  return (
    <div className="relative h-screen w-screen">
      <RenderCount count={rerenderCount} />
      <BouncingBalls count={5}/>
    </div>
  );
};

export default BounceStation;
