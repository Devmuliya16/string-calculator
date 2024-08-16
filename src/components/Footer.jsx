function Footer() {
  return (
    <>
      <section className="p-4 flex flex-col justify-around items-senter h-48 bg-brand-dark w-full text-brand-light">
        <div className="flex flex-raw w-full px-2 items-center justify-between h-1/2">
          <span className="text-[30px] font-bold p-4">DEV MULIYA</span>
          <ui className="flex flex-row items-center justify-between w-2/6 flex-wrap text-sm mx-8">
            <a href="/">Portfolio</a>
            <a href="/">Projects</a>
            <a href="/">Contact</a>
            <a href="/">Resume</a>
          </ui>
        </div>
        <hr className="bg-white"/>
        © 2024 DEV MULIYA.
      </section>
    </>
  )
}

export default Footer