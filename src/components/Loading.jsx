import React from 'react';
import { Puff } from 'react-loader-spinner';  // Import Puff as a named component

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Puff color="#00BFFF" height={550} width={80} />  {/* Use Puff component */}
    </div>
  );
};
