import React from "react";

// components

import Quotes from "../../components/Quotes/Quotes"

export default function Insights() {
  return (
    <>
      <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-red-700">
                Insights
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 px-4">
            <Quotes />
          </div>
        </div>
      </div>
    </>
  );
}
