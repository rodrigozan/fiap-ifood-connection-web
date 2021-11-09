import React, { useState } from "react";

// components

import CardProducts from "components/Cards/CardProducts.js";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-0">
          <CardProducts />
        </div>
      </div>
    </>
  );
}
