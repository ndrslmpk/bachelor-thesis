import React from 'react';
import HeroTop from "../images/hero-bg-top.svg";
import HeroCenter from "../images/hero-bg-center.svg";
import HeroBottom from "../images/hero-bg-bottom.svg";

function Hero(props) {
    return (
        <div className="relative h-screen bg-black">
          {/* <ImgContainer path={HeroTop} className="border-2 w-1000 h-1000" /> */}
          <img src={HeroTop} alt="Hero's Section Top Part SVG" className="absolute w-screen h-auto z-20 top-0" />
          <img src={HeroCenter} alt="Hero's Section Center Part SVG - Sun" className="absolute w-screen h-screen z-10 top-20" />
          <img src={HeroBottom} alt="Hero's Section Bottom Part SVG" className="absolute w-screen h-auto z-20 bottom-0" />
          {/* <div className="flex z-20">
            <p className=" flex text-white z-20">Do you see the future coming?</p>
          </div> */}
        </div>
    );
}

export default Hero;