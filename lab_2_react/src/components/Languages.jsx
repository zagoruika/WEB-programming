function Languages() {
  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[#B45127]/25 pb-[10px] flex justify-between tracking-[2px] uppercase text-[#D03B00]">
        LANGUAGES 
        <span className="opacity-60">05</span>
      </h2>

      <ul className="list-none m-0 p-0 uppercase">
        <li className="flex justify-between text-[15px] leading-[2.2]">
          Ukrainian 
          <span className="opacity-60">Native</span>
        </li>
        <li className="flex justify-between text-[15px] leading-[2.2]">
          English 
          <span className="opacity-60">B2</span>
        </li>
        <li className="flex justify-between text-[15px] leading-[2.2]">
          Polish 
          <span className="opacity-60">B1</span>
        </li>
      </ul>
    </section>
  );
}

export default Languages;