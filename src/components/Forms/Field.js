import React from 'react';

const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        ref={ref} type={type}
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      />
    </div>
  );
});

export default Field