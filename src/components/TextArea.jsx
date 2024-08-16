import React from 'react'
import { useUtil } from '../context/utilContext'
import Button from './Button';

function TextArea() {
  const { inputValue, setInputValue, computeValues } = useUtil();
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <>
      <section className='flex flex-col items-center'>
        <div className="max-w-2xl mx-auto">
          <code htmlFor="message" className="block mb-2 text-sm font- font-bold text-gray-900 ">// String Calculator</code>
          <textarea id="compute" name="input" rows={4} value={inputValue} onChange={handleInput} className="block p-2.5 w-full text-lg font-bold text-gray-900 bg-brand-light rounded-lg drop-shadow-xl" placeholder="Your Input..." />
          <p className="text-sm m-5">
            Enter your numbers in the text area, separated by commas, newlines, or even your own custom delimiter (e.g., //;\n1;2).

            Hit <code>"Compute !"</code> to get the magic sum!✨
          </p>
        </div>
        <div className='flex flex-row items-center justify-center w-full space-x-5'>
          <Button text={"Clear"} style="secondary" handler={() => clearValues()} />
          <Button text={"Compute !"} style="primary" handler={() => computeValues()} />
        </div>
      </section>

    </>
  )
}

export default TextArea