import Navbar from "./Navbar";

function Home() {
  function onCtaClick() {
    return alert("clicked");
  }

  return (
    <div class="relative bg-linear-65 from-[#af8f6f] to-[#493C2E] h-screen w-screen font-jomhuria">
      <img
        src="../src/img/hero/Group 5.png"
        alt="cup image"
        class="absolute -left-100 -bottom- w-full z-0 max-md:-left-60 max-md:-bottom-60 max-w-none max-md:w-[900px]"
      />
      <img
        src="../src/img/hero/bean.png"
        alt=""
        class="absolute right-0 w-sm top-70 z-0 max-md:-right-30"
      />
      <img
        src="../src/img/hero/bean.png"
        alt=""
        class="absolute left-100 top-90 w-sm -rotate-20 blur-md z-0 max-md:top-50 max-md:-left-20"
      />
      <img
        src="../src/img/hero/bean.png"
        alt=""
        class="absolute w-sm z-0 -rotate-90 left-[100px] -top-30 blur-xl "
      />
      <div class="flex flex-col gap-0 p-0 m-0 h-[500px] text-white z-0 top-10 max-md:h-full max-md:w-full">
        <div class="relative w-full h-[500px] max-md:my-30 ">
          <h3 class="absolute text-[200px] m-0 left-70 top-15 max-md:hidden">
            SARA
          </h3>
          <h1 class="text-[500px] m-0 z-2 max-md:hidden">COFFEE</h1>
          <img
            src="../src/img/phone.png"
            alt=""
            class="hidden max-md:block max-w-hidden w-[300px] m-auto"
          />
        </div>
      </div>
      <div class="relative flex justify-between px-40 bottom-0 w-full h-[200px] font-poppins text-white z-3 max-md:-top-70 max-md:px-2 max-md:mt-0 max-md:justify-center max-md:items-center max-md:mb-10">
        <button
          onClick={onCtaClick}
          class="absolute h-auto m-auto ml-0 w-auto text-[30px] px-20 rounded-2xl border-[#B5A253] bg-white-20 backdrop-blur cursor-pointer max-md:px-15 max-md:py-4 max-md:text-3xl border-2 max-md:rounded-4xl"
        >
          BUY NOW!
        </button>
      </div>
    </div>
  );
}

export default Home;
