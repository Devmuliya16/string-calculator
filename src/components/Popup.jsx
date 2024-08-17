import React from 'react'
import { useUtil } from '../context/utilContext'

function Popup() {
    const {inputValue ,outPutValue, popUpMessage} = useUtil();

  return (
    <>
        <div style={{ transform: 'rotateX(180deg)' }} className={`block p-2.5 w-full h-[150px] text-lg text-gray-900 bg-brand-light rounded-lg drop-shadow-xl border-2 ${popUpMessage.isError ? "border-red-600" : ""}`}>
            <span className={`font-bold ${popUpMessage.isError ? "text-red-600": ""}`}>{popUpMessage.isError ? "Error Message" : "Answar"}</span>
            <p>
                {popUpMessage.isError ? popUpMessage.message : inputValue + " = " +outPutValue}
            </p>
        </div>
    </>
  )
}

export default Popup