function AreaCom({ area }) {
  return (
    <>
      <div class="relative flex flex-row w-full h-full font-poppins ">
        <div class="relative flex flex-col gap-3 text-left text-white w-[300px] h-[530px] m-auto max-md:text-center">
          <img src={area.url} alt={area.alt} class="w-[300px] " />
          <h1 class="text-3xl">{area.title}</h1>
          <p class="">{area.desc}</p>
          <a href="" class="text-[#FF9C38]">
            view this room
          </a>
          <button class="border-2 bg-[#744B21] rounded-xl py-2 cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default AreaCom;
