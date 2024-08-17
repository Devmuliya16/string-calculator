import {motion} from 'framer-motion'
function Button(props) {

  const style = {
     primary: "bg-brand-gray text-slate-50 drop-shadow-lg min-w-28",
     secondary: "bg-brand-light text-black drop-shadow-lg min-w-28",
     small_p: "bg-brand-gray text-slate-50",
     small_s: "bg-brand-light text-black",
  }

  return (
    <motion.button
    whileHover={{ scale: 1.09 }}
    whileTap={{ scale: 0.99 }}
    disabled={props.disabled} 
    className={`py-3 px-4  border-2 rounded-lg disabled:opacity-65 ${style[props.style]}`}
    onClick={props.handler}>{props.text}</motion.button>
  )
}

export default Button