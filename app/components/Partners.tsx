
import LogoTicker from '@/components/ui/LogoTicker';
import React from 'react';

const Partners = () => {

    return (
        <div id='partners' className="h-full mx-auto w-full max-w-screen-xl px-4 md:px-20 flex flex-col items-center justify-center py-4 relative">
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-blue-600 rounded-full blur-[10rem] -z-10"></div>
            <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
                <div className="max-w-md mx-auto text-center">
                    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]"></span>
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Partners
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                        Infrastructure Partners
                    </h2>
                </div>
                <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
                    <div className="w-full overflow-hidden sm:mt-12 mt-10 z-10">
                        <LogoTicker/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;