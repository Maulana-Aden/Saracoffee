function Footer() {
  return (
    <>
      <div class="relative flex flex-row justify-between w-full h-[50%] bg-[#543310] text-white px-20 font-poppins max-md:w-screen max-md:px-8">
        <div class=" flex flex-col justify-items-start max-md:w-screen">
          <div class="relative max-md:w-screen max-md:flex max-md:justify-center max-md:content-center max-md:mb-15">
            <img
              src="/img/Group-1.png"
              alt="logo"
              class=" w-[300px] max-md:absolute max-md:w-[150px] max-md:"
            />
          </div>
          <div class="flex flex-col gap-1 text-start mt-7 max-md:text-sm max-md:w-[200px]">
            <h3>Email</h3>
            <h3>Phone </h3>
            <h3>Phone</h3>
          </div>
          <div class="flex justify-start gap-9 mt-10 max-md:gap-2 max-md:mt-4">
            <a href="" class="text-4xl max-md:text-xl">
              <i class="ri-twitter-x-line"></i>
            </a>
            <a href="" class="text-4xl max-md:text-xl">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="" class="text-4xl max-md:text-xl">
              <i class="ri-facebook-line"></i>
            </a>
          </div>
        </div>
        <div class="flex flex-col  items-center justify-center text-justify font-poppins gap-4 max-md:hidden ">
          <a href="">HOME</a>
          <a href="">MENU</a>
          <a href="">CONTACT</a>
          <a href="">ABOUT</a>
        </div>
        <div class="max-md:absolute m-auto w-[600px] max-md:w-[200px] max-md:right-5 max-md:top-20">
          <h3 class="font-inter text-3xl max-md:text-sm">
            We're also available in
          </h3>
          <div class="flex flex-row justify-center">
            <img
              src="/img/Footer/Gofood.png"
              alt=""
              class="w-[200px] h-full max-md:w-[50px]"
            />
            <img
              src="/img/Footer/GrabFood.png"
              alt=""
              class="w-[200px] h-full max-md:w-[50px]"
            />
            <img
              src="/img/Footer/ShopeeFood.png"
              alt=""
              class="w-[200px] h-full max-md:w-[50px]"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div class="relative flex flex-col border-t-white border-t-2 text-white bg-[#543310] gap-3 py-3 max-md:text-sm">
        <div class="flex gap-3 justify-center">
          <h3>Terms & condition</h3>
          <h3>Privacy Policy</h3>
          <h3>Disclosure</h3>
        </div>
        <h3>@ 2025 Saracoffee. All Right Reserved</h3>
      </div>
    </>
  );
}

export default Footer;
