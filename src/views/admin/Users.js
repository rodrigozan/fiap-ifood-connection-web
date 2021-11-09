import React from "react";

// components

import CardUsers from "components/Cards/CardUsers.js";

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardUsers />
        </div>
      </div>
    </>
  );
}
