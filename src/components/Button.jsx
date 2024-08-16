function Button(props) {

  const style = {
     primary: "bg-brand-gray text-slate-50 drop-shadow-lg min-w-28",
     secondary: "bg-brand-light text-black drop-shadow-lg min-w-28",
     small_p: "bg-brand-gray text-slate-50",
     small_s: "bg-brand-light text-black",
  }

  return (
    <button 
    className={`py-3 px-4  border-2 rounded-lg ${style[props.style]}`}
    onClick={props.handler}>{props.text}</button>
  )
}

export default Button