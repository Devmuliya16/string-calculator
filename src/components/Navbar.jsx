import Logo from "../assets/image.png"
import Button from "./Button"

function Navbar() {
  return (
    <>
        <nav className="flex flex-row items-center justify-between bg-brand-light drop-shadow-md rounded-lg p-4 w-full">
             <img width="145" height="40" src={Logo} loading="lazy"/>
             <div className="flex flex-row items-center flex-wrap justify-between">
              <a href="https://devmuliya.vercel.app/contact" target="_blank">

             <Button style="small_s" text="Contact me"/>
              </a>
             </div>
        </nav> 
    </>
  )
}

export default Navbar