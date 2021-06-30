import React from "react";

import { squaredNumbers, sumOfAllPositiveNumbers, initials } from "./Exercice";

type ExerciceResultProps = Record<string, never>;

const ExerciceResult: React.FC<ExerciceResultProps> = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center max-w-2xl mx-auto space-y-12">
      <div className="space-y-3">
        <h4 className="text-xl text-gray-800 font-semibold">Squared numbers</h4>
        <pre className="rounded-xl overflow-hidden bg-gray-800 text-green-200 py-8 px-4">
          {JSON.stringify(squaredNumbers)?.split(",").join(", ")}
        </pre>
      </div>

      <div className="space-y-3">
        <h4 className="text-xl text-gray-800 font-semibold">Sum of all positive integer</h4>
        <pre className="rounded-xl overflow-hidden bg-gray-800 text-green-200 py-8 px-4">
          {JSON.stringify(sumOfAllPositiveNumbers)?.split(",").join(", ")}
        </pre>
      </div>

      <div className="space-y-3">
        <h4 className="text-xl text-gray-800 font-semibold">Initials</h4>
        <pre className="rounded-xl overflow-hidden bg-gray-800 text-yellow-200 py-8 px-4">
          {JSON.stringify(initials)}
        </pre>
      </div>
    </div>
  );
};

export default React.memo(ExerciceResult);
