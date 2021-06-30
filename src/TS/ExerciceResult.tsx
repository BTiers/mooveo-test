import React from "react";

import { squaredNumbers, sumOfAllPositiveNumbers, initials } from "./Exercice";

type ExerciceResultsProps = Record<string, never>;

const answer1 = "[1,4,9,16,25]";
const answer2 = "42";
const answer3 = "VNRTM";

const ExerciceResult: React.FC<{ title: string; answer: string; expectedAnswer: string }> = ({
  title,
  answer,
  expectedAnswer,
}) => {
  return (
    <div className="space-y-3">
      <h4 className="text-xl text-gray-800 font-semibold">{title}</h4>
      <pre
        className={`rounded-xl overflow-hidden bg-gray-800 flex justify-between items-center text-${
          answer === expectedAnswer ? "green" : "red"
        }-200 py-8 px-4`}
      >
        <span>{answer?.split(",").join(", ")}</span>
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="15" className="stroke-current fill-current" />
        </svg>
      </pre>
    </div>
  );
};

const ExerciceResults: React.FC<ExerciceResultsProps> = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center max-w-2xl mx-auto space-y-12">
      <ExerciceResult
        title="Squared numbers"
        expectedAnswer={answer1}
        answer={JSON.stringify(squaredNumbers)}
      />
      <ExerciceResult
        title="Sum of all positive integer"
        expectedAnswer={answer2}
        answer={JSON.stringify(sumOfAllPositiveNumbers)}
      />
      <ExerciceResult title="Initials" expectedAnswer={answer3} answer={JSON.stringify(initials)} />
    </div>
  );
};

export default React.memo(ExerciceResults);
