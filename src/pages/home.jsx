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
        <div></div>
      </section>
      <section className="flex items-center flex-col justify-between h-screen">
        <MySection/>
        <Footer/>
      </section>
    </>
  )
}

export default home