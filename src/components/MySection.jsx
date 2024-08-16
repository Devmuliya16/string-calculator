function MySection() {
  return (
    <>
    <section className="bg-brand-light w-full h-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 ">
        <div className="w-full flex flex-col justify-center p-8">
            <div className="text-[30px] font-extrabold">Let’s Connect!</div>
            <br/>
            <p className="text-lg">I’d love to hear from you. If you have any questions, feedback, or just want to discuss ideas, please feel free to reach out. I’m looking forward to collaborating and making something great together!</p>
        </div>
        <div className="w-full flex flex-col items-center px-4">
          <div className="drop-shadow-lg rounded-xl border-4 h-2/6 w-full content-center border-gray-600 p-5 md:p-10 m-4">
            <span className="font-bold text-2xl">Contact</span>
            <ul className="mx-5">
            <li><b>Email: </b>muliyadev16@gmail.com</li>
            </ul>
          </div>
          <div className="drop-shadow-lg rounded-xl border-4 h-3/6 w-full content-center border-gray-600 p-5 md:p-10 m-4">
            <span className="font-bold text-2xl">Social</span>
            <ul className="mx-5 flex-col flex-wrap flex justify-evenly">
            <li><a className="" href="https://www.linkedin.com/in/dev-muliya">Linkedin &#8599;</a></li>
            <li><a className="" href="https://devmuliya.vercel.app/">Portfolio &#8599;</a></li>
            </ul>
          </div>
          
        </div>
    </section>
    </>
  )
}


export default MySection
