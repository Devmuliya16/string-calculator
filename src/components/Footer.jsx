function Footer() {
  return (
    <>
      <section className="p-4 flex flex-col justify-around items-senter h-48 bg-brand-dark w-full text-brand-light">
        <div className="flex flex-raw w-full px-2 items-center justify-between h-1/2">
          <span className="text-[30px] font-bold p-4">DEV MULIYA</span>
          <ul className="flex flex-row items-center justify-between w-2/6 flex-wrap text-sm mx-8">
            <a href="https://devmuliya.vercel.app/">Portfolio&#8599;</a>
            <a href="https://devmuliya.vercel.app/projects">Projects&#8599;</a>
            <a href="https://devmuliya.vercel.app/contact">Contact&#8599;</a>
            <a href="https://devmuliya.vercel.app/resume">Resume&#8599;</a>
          </ul>
        </div>
        <hr className="bg-white"/>
        © 2024 DEV MULIYA.
      </section>
    </>
  )
}

export default Footer