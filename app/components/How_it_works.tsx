
import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
    const cards = [
        {
            title: "Earn with $NAI",
            description: "Pay for units with $ETH or $NAI, receive $NAI for your lending",
            image: "/card1.png",
            span: "md:col-span-1"
        },
        {
            title: "Rent and lend",
            description: "Join our Nebula marketplace to earn from your lent GPU rentals, stake your $NAI to earn from fees and pooled generate revenue.",
            image: "/card2.png",
            span: "md:col-span-2"
        },
        {
            title: "Processing and verification",
            description: "Clients submit their computational tasks to Nebula, where they are instantly distributed across our secure network of high-performance AI nodes.",
            image: "/card3.png",
            span: "md:col-span-2"
        },
        {
            title: "Encrypted delivery",
            description: "Verified results are encrypted and returned to the clients promptly.",
            image: "/card4.png",
            span: "md:col-span-1"
        },
        {
            title: "Task submission and distribution",
            description: "The tasks are processed in parallel, harnessing the power of the L1 & L2 networks for secure, efficient, and verifiable computation.",
            image: "/card5.png",
            span: "md:col-span-3"
        }
    ];

    return (

        <div id="how-it-works" className="h-full mx-auto w-full max-w-screen-xl px-4 md:px-20 flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute top-auto -right-0 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-blue-600 rounded-full blur-[10rem] -z-10"></div>

            <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
                <div className="mx-auto text-center md:mt-10">
                    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]"></span>
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Working
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">How it works</h2>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`w-full h-full relative flex flex-col lg:flex-row items-center rounded-2xl lg:rounded-3xl bg-card border-2 border-[#172746] border-border/50 hover:border-border/100 transition-colors ${card.span}`}
                            style={{ opacity: 1, transform: 'none' }}
                        >
                            <div className="group relative flex size-full rounded-xl p-4 lg:p-6 lg:rounded-3xl flex-1">
                                <div className="absolute inset-px z-10 rounded-3xl bg-[#000107]"></div>
                                <div className="relative z-30 w-full">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <div className="">
                                            <h3 className="text-lg font-semibold flex items-center gap-2">{card.title}</h3>
                                            <p className="text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-muted-foreground">{card.description}</p>
                                        </div>
                                        <div className="my-auto w-full lg:w-auto overflow-hidden">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                width={600}
                                                height={600}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    style={{ opacity: 0.8, background: 'radial-gradient(200px at -200px -200px, rgba(59, 130, 246, 0.1), transparent 100%)' }}
                                ></div>
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-xl bg-border duration-300 group-hover:opacity-100"
                                    style={{ background: 'radial-gradient(200px circle at -200px -200px, #38bdf8, #3b82f6, hsl(var(--border)) 100%)' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;