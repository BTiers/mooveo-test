import React, { useCallback, useEffect, useState } from "react";

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
  const [value, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<any>();
  const [error, setError] = useState<string>();

  const fetchValue = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetch(`https://api.nationalize.io?name=${value}`)
      setIsLoading(false);
      const res = await result.json();
      setResult(res);
      return (await result).json;

    } catch (error) {
      setError('Une erreur est survenue');
    }
  }, [value]);
  
  useEffect(() => {
    fetchValue();
  }, [value, fetchValue])

  return (
    <div className="h-screen space-y-6 w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="flex flex-col gap-2 bg-white max-w-lg w-full px-8 py-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
          placeholder="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 bg-white max-w-lg w-full max-h-64 h-full px-8 py-6 rounded-lg shadow-lg">
        {isLoading ? (
            <Loader/>
          ) : (
            <ul className="divide-y">
              {/* Elements fetched */}
              {result?.country?.map((c: any) => <NationalizeResult key={c.country_id} country_id={c.country_id} probability={c.probability} />)}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default React.memo(Nationalize);
