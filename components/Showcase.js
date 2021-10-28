import React from "react";

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Showcase() {
  return (
    <div>
      <div class="text-white font-bold bg-cover bg-no-repeat  bg-center h-spacing-mobile md:h-screen -mt-10 md:-mt-36 items-center bg-hero-pattern">
        <div className="block mx-auto md:mx-px">
          <h1 className="pt-36 md:pt-96 text-4xl flex justify-center  md:text-left text-center md:text-6xl">DANGER Roleplay</h1>
          <button class="md:flex hidden m-auto justify-items-center justify-self-center bg-black bg-opacity-60 border-2 border-yellow-400 z-30 mb-36 py-4 px-8  mt-8 hover:bg-gray-900 hover:border-2 hover:border-white hover:text-white">
            <p>Obejrzyj Teaser</p>
          </button>
          <button class="md:hidden flex m-auto justify-items-center justify-self-center bg-black bg-opacity-60 border-2 border-yellow-400 z-30 mb-36 py-4 px-8  mt-8 hover:bg-gray-900 hover:border-2 hover:border-white hover:text-white">
            <p>Obejrzyj Teaser</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;