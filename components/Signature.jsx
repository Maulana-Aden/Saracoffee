function Signature({ menu }) {
  return (
    <div class="relative flex flex-col gap-3 text-center text-white w-[300px] h-[530px] m-auto ">
      <img src={menu.url} alt={menu.alt} class="w-[300px] " />
      <h1 class="text-3xl font-koulen">{menu.title}</h1>
      <p class="font-poppins">{menu.desc}</p>
    </div>
  );
}

export default Signature;
