import { useState, useEffect } from "react";

function Contact() {
  const [mapSize, setMapSize] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMapSize({
          width: 300,
          height: 200,
        });
      } else {
        setMapSize({
          width: 400,
          height: 400,
        });
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div class="relative flex justify-center items-center w-full h-full bg-linear-to-b from-[#74512D] to-[#543310] max-md:flex-col-reverse max-md:w-screen">
        <div class="max-md:mt-10 max-md:mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1979.8405017489151!2d110.3932199!3d-7.0467216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b003d807565%3A0xfbbb55ede3fdc206!2sBuilding%20B3%2C%20FBS%20UNNES!5e0!3m2!1sid!2sid!4v1719330660277!5m2!1sid!2sid"
            width={mapSize.width}
            height={mapSize.height}
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="relative flex flex-col justify-between px-4 ml-10 text-white w-[500px] h-[400px] max-md:w-screen max-md:px-0 max-md:ml-0 max-md:my-10 max-md:">
          <h1 class="font-poppins text-3xl max-md:mb-10">Contact Us</h1>
          <div class="relative flex flex-col gap-4 mx-8">
            <input
              type="email"
              placeholder="To:"
              class="w-full border rounded-lg p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              class="w-full border rounded-lg p-2 focus:outline-none"
            />
            <textarea
              placeholder="Write your message..."
              class="w-full p-3 border rounded-lg h-40 focus:outline-none"
            ></textarea>
          </div>
          <button class="border-2 bg-[#875829] text-white font-poppins text-2xl py-2 px-15 rounded-2xl right-25 bottom-10 cursor-pointer max-md:text-xl max-md:w-[300px] max-md:m-auto max-md:my-6">
            SEND
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
