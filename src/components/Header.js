import React from "react";

const Header = () => {
  return (
    <div>
      <h1 className="xl:text-[1.8rem] md:text-[1.5rem] sm:text-[1.2rem] text-red-600 font-bold text-center leading-6 my-3 mx-6">
        Land resource inventory of four selected watersheds in Bihar using
        geo-spatial techniques
      </h1>
      <div className="lg:text-[1.5rem] sm:text-[1.2rem] text-[1rem] text-black font-semibold text-center leading-6 my-3 mx-6">
        ICAR-NBSS&LUP, Kolkata
      </div>
    </div>
  );
};

export default Header;
