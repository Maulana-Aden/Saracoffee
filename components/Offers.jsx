function Offers() {
  return (
    <>
      <div class="relative flex flex-col w-screen h-screen bg-[#AF8F6F] mt-70 overflow-hidden text-white max-md:mt-0 max-md:pt-20 ">
        <img
          src="/img/bg-image-2.png"
          alt=""
          class="absolute w-full -bottom-90 z-0 max-md:bottom-0 max-md:top-0 max-md:h-full"
        />
        <div class="relative w-screen h-full flex flex-col z-1 max-md:text-center">
          <h2 class="font-inter text-[50px] w-[500px] border-b-2 mx-auto max-md:text-[27px] max-md:w-[270px]">
            SPECIAL OFFERS
          </h2>
          <h2 class="absolute font-kapakana text-[100px] w-[500px] text-center top-7 right-110  not-target: max-md:text-[60px] max-md:w-[370px] max-md:right-0 max-md:left-0 max-md:relative max-md:-top-43 max-md:m-auto ">
            Morning Coffee
          </h2>
        </div>
        <div class="relative flex w-[1000px] m-auto h-full  pt-3 top-15 z-1 max-md:w-screen max-md:-top-50  max-md:h-screen ">
          <img
            src="/img/coffee/butterscotch.png"
            alt=""
            class="w-[200px] h-auto m-auto absolute left-60 top-6 max-md:rotate-25 max-md:-top-20 max-md:left-50"
          />
          <img
            src="/img/coffee/ice-black-coffee.png"
            alt=""
            class="w-[200px] h-auto m-auto z-2 max-md:rotate-20 max-md:absolute max-md:right-27 max-md:top-10wk,"
          />
          <img
            src="/img/coffee/caramel.png"
            alt=""
            class="w-[200px] h-auto m-auto absolute right-60 top-6 max-md:-rotate-25 max-md:-top-10 max-md:right-40"
          />
        </div>
        <img
          src="/img/bg-bean.png"
          alt=""
          class="absolute w-[800px] -left-40 max-w-none"
        />
        <button class="absolute font-poppins bottom-10 w-[500px] h-[60px]  left-1/2 transform -translate-x-1/2 bg-[#543310]  z-1 text-2xl rounded-2xl cursor-pointer max-md:w-[250px] max-md:text-xl max-md:bottom-20 border-2">
          SEE MORE
        </button>
        <div class="absolute top-50 left-15 font-koulen text-start leading-[0.8] max-md:hidden">
          <h3 class="p-0 m-0 text-[70px] max-md:hidden">GET YOUR FAVE</h3>
          <h3 class="p-0 m-0 text-[170px] max-md:hidden">DRINK</h3>
          <h3 class="p-0 m-0 text-[70px] text-center max-md:hidden">NOW</h3>
          <h3 class="p-0 m-0 text-[70px] max-md:hidden">GET YOUR</h3>
        </div>
        <div
          class="absolute flex font-koulen text-start leading-[0.8]  bottom-40
    left-[10%]"
        >
          <div class="pr-4">
            <h3 class="p-0 m-0 text-[60px]">GET YOUR</h3>
            <h3 class="p-0 m-0 text-[50px] max-md:">FAVE DRINK</h3>
          </div>
          <div class="pl-4 border-l-6 flex flex-col justify-between content-between">
            <h3 class="p-0 m-0 text-[23px]">LARGE SIZE</h3>
            <h3 class="p-0 m-0 text-[82px]">17k</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
