import React from "react";

function About() {
  return (
    <div className="md:grid block md:grid-cols-2 md:bg-none">
      <div className="block md:hidden mx-16 text-white my-24">
        <h1 className="text-3xl border-yellow-400 border-b-2 w-32 mb-12 text-center font-russo">Frakcje</h1>
        <p className="text-justify">Wyrózniamy frakcje takie jak EMS, LSPD, Mechanicy oraz organizacje stworzone przez graczy</p>
      </div>
      <div className="hidden md:block mx-16 text-white mt-24">
        <h1 className="text-3xl border-yellow-400 border-b-2 w-32 mb-12 text-center font-russo">Frakcje</h1>
        <p>Wyrózniamy frakcje takie jak EMS, LSPD, Mechanicy oraz organizacje stworzone przez graczy</p>
      </div>
      <div className="md:block md:h-96 h-96 w-full no-repeat bg-center bg-emergency bg-cover">
      </div>
    </div>
  );
}

export default About;