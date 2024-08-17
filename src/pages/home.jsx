import TextArea from '../components/TextArea'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MySection from '../components/MySection'
import RotatingOnScroll from '../components/RotatingOnScroll'
import Logo from "../assets/logo.png"

const home = () => {

  return (
    <>
    <RotatingOnScroll img={Logo} position={{right:"0px", top:"30%"}}/>
      <section className="flex items-center flex-col justify-between h-screen p-4">
        <Navbar/>
        <TextArea/>
        <div className='w-full content-center text-center text-2xl'><span className='drop-shadow-lg animate-pulse'>&darr;</span></div>
      </section>
      <section className="flex items-center flex-col justify-between h-screen">
        <MySection/>
        <Footer/>
      </section>
    </>
  )
}

export default home