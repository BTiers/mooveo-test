import React from "react";

import countryCodeEmoji from "country-code-emoji";

const NationalizeResult: React.FC<any> = ({ probability, country_id }) => {
  return (
    <li className="text-gray-800 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <span className="text-base">{country_id} -</span>
        <span className="text-2xl pl-1">{countryCodeEmoji(country_id)}</span>
      </div>
      <div className="text-indigo-600 font-semibold">{probability}%</div>
    </li>
  );
};

const Loader: React.FC<Record<string, never>> = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-indigo-300 h-14 rounded-md" />
      <div className="bg-indigo-300 h-14 rounded-md" />
      <div className="bg-indigo-300 h-14 rounded-md" />
    </div>
  );
};

// https://api.nationalize.io?name=Victor

type NationalizeProps = {};

const Nationalize: React.FC<NationalizeProps> = () => {
  return (
    <div className="h-screen space-y-6 w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="flex flex-col gap-2 bg-white max-w-lg w-full px-8 py-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col gap-2 bg-white max-w-lg w-full max-h-64 h-full px-8 py-6 rounded-lg shadow-lg">
        <ul className="divide-y">
          {/* Elements fetched */}
          <NationalizeResult country_id="FR" probability={43} />
          <NationalizeResult country_id="US" probability={22} />
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Nationalize);
