import React from "react";

const TransactionDashboard = ({ className }) => {
  return (
    <div className={`${className} p-2 bg-black flex-col`}>
      <div className='flex w-full justify-center mb-5'>
        <h1 className='text-white text-xl font-mono font-bold'>
          Transaction Dashboard
        </h1>
      </div>
      <div className='flex w-full flex-col border'>
        <div className='w-full'>
          <h2 className='text-white'>transaction data...</h2>
        </div>
        <div className='w-full p-2'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='transaction data... '
            className='w-full h-full font-mono text-xs resize-none p-1'
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionDashboard;
