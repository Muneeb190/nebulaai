import React from 'react';
import Image from 'next/image';

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
    <footer className="flex flex-col relative items-center justify-center border border-[#172746] mb-16 rounded-2xl pb-8 px-6 lg:px-8 w-full max-w-7xl mx-auto">
      {/* Background blurs */}
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-blue-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute -top-1/3 right-2 bg-blue-600 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      <div className="w-full h-40" style={{ opacity: 1, transform: 'none' }}>
        <div className="border-border/40 lg:flex lg:items-center lg:justify-between w-full pt-8">
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Image
                alt="nebulaai Logo"
                src="/nebulaiwehiteblue.png"
                width={180}
                height={180}
                className="color-transparent"
              />
            </div>
            <p className="mt-2 py-1 text-md bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-muted-foreground">
              A decentralised supercomputer designed to meet the demand for next gen AI
            </p>
          </div>

          {/* Social links */}
          <div className="relative flex mt-4 lg:mt-0">
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
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full h-0.5 mx-auto my-5 bg-blue-800 border-border border-0 rounded-sm md:my-2" />

        {/* Copyright */}
        <div className="border-t border-border/40 md:flex border-[#172746] md:items-center md:justify-center w-full pt-2">
          <p className="text-md text-muted-foreground text-center mt-2 bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% md:mt-0">
            © 2025 Nebula. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;