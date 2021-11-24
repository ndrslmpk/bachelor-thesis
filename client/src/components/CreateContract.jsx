import React from "react";

const CreateContract = ({ className }) => {
  return (
    <div className={`${className}  bg-black p-2`}>
      <div className='flex flex-col  rounded-2xl shadow-lg'>
        <h1 className='flex w-full justify-center mb-5     text-white text-xl font-mono font-bold'>
          Create an L/C Contract
        </h1>
        <form action='' method='post'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Your company name'
            className='font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50'
          />
          <input
            type='text'
            name=''
            id=''
            placeholder='Your company ETH address'
            className='font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50'
          />
          <input
            type='text'
            name=''
            id=''
            placeholder='Your contract subject'
            className='font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50'
          />
          <input
            type='number'
            name=''
            id=''
            placeholder='Your contract value'
            className='font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50'
          />
          <div className='flex flex-row items-end mt-10'>
            <div className='flex w-1/2 mx-2 justify-end'>
              <button className='w-1/3 bg-transparent bg-primarydark hover:bg-primarydark text-primarydarkdark font-semibold hover:text-white py-2 px-4 border border-primarydark hover:border-transparent rounded        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                Create
              </button>
            </div>
            <div className='flex w-1/2 mx-2 justify-start'>
              <button
                className='w-1/3 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded'
                disabled
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContract;
