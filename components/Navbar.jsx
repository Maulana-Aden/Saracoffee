import { useState } from "react";

function Navbar() {
  function onCtaClick() {
    return alert("clicked");
  }
  const [active, setActive] = useState(false);

  return (
    <div
      className="Navbar-container"
      class="flex absolute left-0  w-full justify-between h-15 align-middle z-999"
    >
      <img src="/img/Group-4.png" alt="saracoffee" class="pl-16 max-md:pl-5" />
      <div
        class={`flex justify-center items-center font-poppins  w-auto
  max-md:absolute max-md:w-full  max-md:z-0  max-md:h-screen transition-all 
  ${active ? "top-0 bg-white text-black" : "-top-190 text-white"}
`}
      >
        <ul class="flex h-auto justify-center align-middle  gap-6 font-poppins text-base max-md:flex-col max-md:my-16 max-md:h-full ">
          <li class="max-md:border-b-2">
            <a href="">HOME</a>
          </li>
          <li class="max-md:border-b-2">
            <a href="">MENU</a>
          </li>
          <li class="max-md:border-b-2">
            <a href="">CONTACT</a>
          </li>
          <li class="max-md:border-b-2">
            <a href="">ABOUT</a>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center p-6 z-1">
        <button
          onClick={onCtaClick}
          class=" py-2 px-4 rounded-[15px] bg-[#A36C31] font-poppins text-white shadow-md shadow-black max-md:hidden"
        >
          LOGIN
        </button>
        <button
          onClick={() => setActive(!active)}
          class={`cursor-pointer hidden max-md:block text-2xl ${
            active ? " text-black" : " text-white"
          }`}
        >
          <i class={active ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
