import React from 'react';
import Image from 'next/image';
import TextShimmerColor from '@/components/ui/text';
import { SlCopyButton } from '@shoelace-style/shoelace/dist/react';



const Hero = () => {
  return (
    <div id="hero" className="h-full mx-auto w-full max-w-screen-xl px-4 md:px-20">
      <div className="absolute inset-0 white:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[120vh]"></div>
      
      <div className="w-full h-full md:w-full" style={{ opacity: 1, transform: 'none' }}>
        <div className="flex flex-col items-center justify-center pt-40 h-full">
          <div className="flex items-center justify-between px-4 py-0 md:mb-0 mb-3 w-full max-w-sm rounded-full border bg-gradient-to-r from-black via-[#00093399] to-[#00082999] text-card-foreground shadow-sm">
            <code className="font-mono text-sm truncate">0x701C7542cD5D69494ef9fc8829a7F6093aD8084C</code>
            <SlCopyButton className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs" id="copyButton" value="0x701C7542cD5D69494ef9fc8829a7F6093aD8084C" />
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="ml-0 lg:ml-10">
                <h1 className="text-xl text-center lg:text-4xl lg:text-start font-bold py-2 mb-6 bg-gradient-to-r from-blue-700 via-blue-500 to-white text-transparent bg-clip-text bg-300% animate-gradient">
                  <TextShimmerColor/>
                </h1>
                <p className="text-md lg:text-start text-center sm:text-lg bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% mb-8">
                  Access GPUs from our decentralised servers or from our vast network of community members
                </p>

                <div className="flex gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    {['twitter', 'telegram', 'dextools', 'ethscan', 'gitbook'].map((social) => (
                      <a 
                        key={social}
                        href={`https://${social === 'telegram' ? 't.me/NebulaNTWRK1' : 
                                social === 'dextools' ? 'www.dextools.io/app/en/ether/pair-explorer/0x701C7542cD5D69494ef9fc8829a7F6093aD8084C' :
                                social === 'ethscan' ? 'etherscan.io/address/0x701C7542cD5D69494ef9fc8829a7F6093aD8084C' :
                                social === 'gitbook' ? 'docs.nebulanetwork.ai/' : 
                                `x.com/NebulaNTWRK`}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group"
                      >
                        <Image 
                          src={`${social}.svg`} 
                          alt={social.charAt(0).toUpperCase() + social.slice(1)} 
                          width={16}
                          height={16}
                          className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500"
                        />
                        <Image 
                          src={`${social}.svg`} 
                          alt={social.charAt(0).toUpperCase() + social.slice(1)} 
                          width={16}
                          height={16}
                          className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 justify-center lg:justify-start md:mr-2 mt-6">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none cursor-pointer disabled:opacity-50 shadow hover:bg-primary/90 h-9 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white py-5 px-7">
                    Buy $NAI
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none cursor-pointer disabled:opacity-50 border border-[#172746] border-input bg-[#03070F] shadow-sm hover:bg-[#111C32] hover:text-accent-foreground h-9 mx-2 py-5 px-7">
                    Rent a GPU
                  </button>
                </div>
              </div>

              <div className="relative w-full aspect-square">
                <div className="absolute top-1/2 left-1/2 -z-10 gradient w-1/4 bg-blue-500 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] "></div>
                <div className="absolute top-1/2 left-1/2 -z-10 gradient w-1/4 bg-blue-400 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem] "></div>
                <div className="relative w-full h-full">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain hero-image z-10 bg-transparent"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <source src="/main.mov" type="video/mp4; codecs=hvc1" />
                    <source src="/main.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center py-10 md:py-20 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;