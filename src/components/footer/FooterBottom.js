import React from 'react';
import DateDisplay from './DateDisplay';

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        <DateDisplay />
      </p>
    </div>
  );
}

export default FooterBottom