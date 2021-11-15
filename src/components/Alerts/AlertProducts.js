import React, { useState } from "react";

export const AlertProducts = (props) => {
  const [alert, setAlert] = useState(false)

  function handleHideAlert(status) {
    setAlert(status)
  }

  return (
    <div className="border-t-0 bg-red-600 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-between">
      <span className="font-bold text-white">
        Não foi possível {props.message} o produto, por favor, tente novamente mais tarde
      </span>
      <button onClick={handleHideAlert(props.status)} className="font-bold text-white">
        <i class="fas fa-window-close"></i>
      </button>
    </div>
  )
}

