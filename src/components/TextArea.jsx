import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useUtil } from '../context/utilContext'
import Button from './Button';
import Popup from './Popup';

function TextArea() {
  const { inputValue ,outPutValue, setInputValue, computeValues, popUpMessage , resetAllStates} = useUtil();
  const [isFlipped,setIsFlipped] = useState(false);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  const clearInput = () =>{
    if(outPutValue!=="" || popUpMessage.isError)
    setIsFlipped(!isFlipped)
    resetAllStates();
  }

  const computeAnswar = ()=>{
    setIsFlipped(true);
    computeValues();
  }

  return (
    <>
      <motion.section 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1}}
       transition={{ duration: 0.2 }}
      className='flex flex-col items-center'>
        <div className="max-w-2xl mx-auto">
          <code htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">// String Calculator</code>

            <motion.div
              animate={{ rotateX: isFlipped ? 180 : 0 , scale: isFlipped ? [0.9,1.5,1] : 1 }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                scale: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  delay: 0.2, // Delay returning to original size after flip
                },
              }}
            >
            {(isFlipped) ? <Popup/> : <textarea id="compute" name="input" rows={4} cols={4}  value={inputValue} onChange={handleInput} className="block p-2.5 w-full text-lg font-bold text-gray-900 bg-brand-light rounded-lg drop-shadow-xl resize-none" placeholder="Your Input..." />}
            </motion.div>


          <p className="text-sm m-5">
            Enter your numbers in the text area, separated by commas, newlines, or even your own custom delimiter (e.g., //;\n1;2).

            Hit <code>"Compute !"</code> to get the magic sum!✨
          </p>
        </div>
        <div className='flex flex-row items-center justify-center w-full space-x-5'>
          <Button text={"Clear"} disabled={!isFlipped} style="secondary" handler={clearInput} />
          <Button text={"Compute !"} disabled={isFlipped} style="primary" handler={computeAnswar} />
        </div>
      </motion.section>

    </>
  )
}

export default TextArea