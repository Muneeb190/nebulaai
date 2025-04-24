import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    {
      href: "https://x.com/NebulaNTWRK",
      icon: "/twitter.svg",
      alt: "Twitter"
    },
    {
      href: "https://t.me/NebulaNTWRK1",
      icon: "/telegram.svg",
      alt: "Telegram"
    },
    {
      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x701C7542cD5D69494ef9fc8829a7F6093aD8084C",
      icon: "/dextools.svg",
      alt: "Dextools"
    },
    {
      href: "https://etherscan.io/address/0x701C7542cD5D69494ef9fc8829a7F6093aD8084C",
      icon: "/ethscan.svg",
      alt: "Etherscan"
    },
    {
      href: "https://docs.nebulanetwork.ai/",
      icon: "/gitbook.svg",
      alt: "Gitbook"
    }
  ];
  return (

    <footer className="flex flex-col relative items-center justify-center border border-[#0c1835] mb-10 rounded-2xl border-border pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto">
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-blue-500 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute -top-1/3 right-2 bg-blue-500 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="w-full" style={{ opacity: 1, transform: 'none' }}>
        <div className="border-border/40 lg:flex lg:items-center lg:justify-between w-full pt-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <img
                alt="nebulaai Logo"
                loading="lazy"
                width="170"
                height="170"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src="/nebulaiwehiteblue.png"
              />
            </div>
            <p className="mt-2 text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-muted-foreground">A decentralised supercomputer designed to meet the demand for next gen AI</p>
          </div>
          <div className="relative flex mt-4 lg:mt-0">
            <form className="flex items-center mx-auto relative">
              <div className="flex gap-4 mt-4 lg:mt-0">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group"
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={16}
                      height={16}
                      className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500"
                    />
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={16}
                      height={16}
                      className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500"
                    />
                  </a>
                ))}
              </div>
            </form>
          </div>
        </div>
        <hr className="w-full h-0.5 mx-auto my-5 bg-blue-800 border-border border-0 rounded-sm md:my-2" />
        <div className="border-t border-[#0a1327] border-border/40 md:flex md:items-center md:justify-center w-full pt-2">
          <p className="text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-muted-foreground text-center mt-2 md:mt-0">© 2025 Nebula. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer