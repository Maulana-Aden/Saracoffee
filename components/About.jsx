function About() {
  return (
    <>
      <div class="relative flex justify-between align-middle text-white w-screen h-screen bg-[#211C17] px-20 max-md:p-3 max-md:justify-center max-md:pt-15 max-md:h-full">
        <div class="flex flex-col justify-center   w-[500px] text-left ml-10 max-md:ml-0">
          <img
            src="/img/Group-1.png"
            alt="logo"
            class=" w-sm border-b max-md:w-[300px] max-md:m-auto max-md:pl-6"
          />
          <h2 class="font-aguafina text-[80px]  text-center text-[#FFD7AE] max-md:text-6xl">
            Welcome to our café
          </h2>
          <img
            src="/img/place.png"
            alt="place"
            class="hidden m-auto mt-4 w-[300px] max-md:block max-w-none"
          />
          <p class="max-md:text-md max-md:m-8 max-md:text-sm max-md:text-center">
            Our café is a simple, calming space built around good coffee and
            quiet moments. We serve freshly brewed drinks and light pastries,
            focusing on clean flavors and a relaxed atmosphere. Whether you are
            stopping by to work, meet someone, or take a short break, our place
            is designed to feel open, warm, and easy to settle into.
          </p>
          <button class="border-2 h-auto mt-10 w-[350px] text-[30px] rounded-2xl border-[#B5A253] bg-white/20 backdrop-blur cursor-pointer max-md:m-auto max-md:my-2 max-md:w-[200px] max-md:text-xl">
            Read More
          </button>
        </div>
        <div class="relative ">
          <img
            src="/img/place.png"
            alt="place"
            class="mt-30 mr-20 w-sm max-md:hidden"
          />
        </div>
      </div>
    </>
  );
}

export default About;
