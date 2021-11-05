import React from "react";

function About() {
  return (
    <div className="md:grid block md:grid-cols-2 md:bg-none">
      <div className="block md:hidden mx-16 text-white my-24">
        <h1 className="text-3xl border-yellow-400 border-b-2 w-44 mb-12 text-center font-russo">Samochody</h1>
        <p className="text-justify">Na naszym serwerze znajdziesz wiele świetnie zopytmalizowanych modeli ze świata realnego</p>
      </div>
      <div className="md:block md:h-96 h-96 w-full bg-cover no-repeat bg-center bg-mustang">
      </div>
      <div className=" hidden md:block mx-16 text-white mt-24">
        <h1 className="text-3xl border-yellow-400 border-b-2 w-48 mb-12 text-center font-russo">Samochody</h1>
        <p>Na naszym serwerze znajdziesz wiele świetnie zopytmalizowanych modeli ze świata realnego</p>
      </div>
    </div>
  );
}

export default About;