import React from "react";

<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" /></link>

function Ad() {
  return (
    <div>
      <div class="text-white font-bold items-center block md:flex">
        <a href="/DangerRP.pdf" className="flex flex-col m-auto bg-yellow-600 h-64 md:w-3/4 w-full hover:transition hover:duration-300 hover:bg-yellow-500">
          <img class="m-auto h-24 md:h-32" src="/img/rules.png" alt="" />
          <p className="m-auto font-bold text-2xl">Regulamin</p>
        </a>
        <a href="http://dc.dangerrp.pl" className="flex flex-col m-auto bg-yellow-600 h-64 md:w-1/4 w-full hover:transition hover:duration-300 hover:bg-yellow-500">
          <img src="/img/discord.png" className="m-auto h-32 md:h-40" alt="" />
          <p className="m-auto font-bold text-2xl">Discord</p>
        </a>
      </div>
    </div >
  );
}

export default Ad;