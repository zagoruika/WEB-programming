function Sidebar() {
  return (
    <aside className="w-[370px] shrink-0 box-border p-0">
      
      <div className="w-full h-[370px] flex items-center justify-center my-10 box-border overflow-hidden">
        <img src="/star.svg" alt="Star" className="w-[90%] h-[90%] object-contain"/>
      </div>

      <section className="px-10 mb-[50px] box-border">
        <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[#B45127]/25 pb-[10px] flex justify-between tracking-[2px] uppercase text-[#D03B00]">
          CONTACTS
          <span className="opacity-60">01</span>
        </h2>

        <ul className="list-none m-0 p-0">
          <li className="text-[14px] leading-[2]">
            <a href="mailto:viktoriia.zahoruiko@gmail.com" className="text-[#D03B00] no-underline hover:underline">
              VIKTORIIA.ZAHORUIKO@GMAIL.COM
            </a>
          </li>
          <li className="text-[14px] leading-[2]">
            <a href="tel:+380989068937" className="text-[#D03B00] no-underline hover:underline">
              +38 (098) 906 8937
            </a>
          </li>
          <li className="text-[14px] leading-[2]">
            <a href="https://t.me/zagoruika" className="text-[#D03B00] no-underline hover:underline">
              TELEGRAM
            </a>
          </li>
          <li className="text-[14px] leading-[2]">
            <a href="https://www.linkedin.com/in/viktoriia-zahoruiko-723188323/" className="text-[#D03B00] no-underline hover:underline">
              LINKEDIN
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;