import React from 'react';
import Image from 'next/image';
import { GridPatternSpotlight } from './test';

const FAQ1 = () => {
  return (
    <div id="faq" className="h-full mx-auto w-full max-w-screen-xl px-4 md:px-20 flex flex-col items-center justify-center py-12 relative">
      <div className="h-full w-full max-w-full" style={{ opacity: 1, transform: 'none' }}>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-row justify-center items-center gap-16 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <Image
                alt="Assure DeFi"
                src="/assure.png"
                width={170}
                height={170}
                className="color-transparent"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer disabled:opacity-50 shadow hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white text-primary-foreground hover:bg-primary/90 px-5 mt-4 py-5">
                Assure DeFi profile
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="Source Hat"
                src="/SH-Dark.png"
                width={170}
                height={170}
                className="color-transparent"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer disabled:opacity-50 shadow hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white text-primary-foreground hover:bg-primary/90 px-5 mt-4 py-5">
                Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;