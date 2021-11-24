import React from "react";

import PenginLogo from "../images/ndrslmpk_logo.svg";

const Navbar = () => {
  return (
    <div className='w-full bg-black'>
      <div className='flex flex-row w-16 h-16 items-center justify-center rounded-full p-2'>
        <img src={PenginLogo} alt='Pengin Logo' />
      </div>
    </div>
  );
};

export default Navbar;
