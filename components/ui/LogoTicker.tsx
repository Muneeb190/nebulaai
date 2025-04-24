"use client"
import intel from "@/public/intel.png";
import msi from "@/public/msi.png";
import proof from "@/public/proof.png";
import ryzen from "@/public/ryzen.png";
import vastai from "@/public/vastai.png";
import nvidia from "@/public/nvidia.png";
import amd from "@/public/amd.png";
import zotac from "@/public/zotac.png";
import Image from "next/image";
import { motion } from "framer-motion";


import React from 'react'

const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12 ">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div className="flex gap-20 lg:gap-30 pr-28 flex-none "
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}>
                        <Image src={intel} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={msi} alt="msi logo" className="logo-ticker-image" />
                        <Image src={proof} alt="proof logo" className="logo-ticker-image" />
                        <Image src={ryzen} alt="Ryzen logo" className="logo-ticker-image h-20" />
                        <Image src={vastai} alt="vastsai logo" className="logo-ticker-image h-20" />
                        <Image src={nvidia} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={amd} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={zotac} alt="Intel logo" className="logo-ticker-image" />

                        {/* second set of logo for animation */}
                        <Image src={intel} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={msi} alt="msi logo" className="logo-ticker-image" />
                        <Image src={proof} alt="proof logo" className="logo-ticker-image" />
                        <Image src={ryzen} alt="Ryzen logo" className="logo-ticker-image" />
                        <Image src={vastai} alt="vastsai logo" className="logo-ticker-image" />
                        <Image src={nvidia} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={amd} alt="Intel logo" className="logo-ticker-image" />
                        <Image src={zotac} alt="Intel logo" className="logo-ticker-image" />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default LogoTicker