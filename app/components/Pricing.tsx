import React from 'react';

const Pricing = () => {
    return (
        <div id="pricing" className="h-full mx-auto w-full max-w-screen-xl px-4 md:px-20 flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute -top-1/3 -left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>

            <div className="w-full h-full" style={{ opacity: 1, transform: 'none' }}>
                <div className="mx-auto text-center md:mt-10">
                    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]"></span>
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Pricing
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                        Access our GPUs at affordable pricing.
                    </h2>

                    <div className="relative flex flex-col items-center justify-center w-full py-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative overflow-visible w-full">
                            {/* Card 1 */}
                            <div className="w-full h-full relative flex flex-col lg:flex-row items-center rounded-2xl lg:rounded-3xl bg-card border-2 border-[#0c1835] hover:border-border/100 transition-colors" style={{ opacity: 1, transform: 'none' }}>
                                <div className="group relative flex size-full rounded-xl p-4 lg:p-6 lg:rounded-3xl flex-1">
                                    <div className="absolute inset-px z-10 rounded-3xl bg-[#000107]"></div>
                                    <div className="relative z-30 w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="my-auto w-full lg:w-auto overflow-hidden">
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover bg-transparent"
                                                    style={{ backgroundColor: 'transparent' }}
                                                >
                                                    <source src="/setup.mov" type="video/mp4; codecs=hvc1" />
                                                    <source src="/setup.webm" type="video/webm" />
                                                </video>
                                            </div>
                                            <div className="mt-4 md:mt-5">
                                                <h3 className="text-lg font-semibold flex items-center gap-2">Setup your node</h3>
                                                <p className="text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-start text-muted-foreground">
                                                    Connect your GPU node to our decentralized network and start earning.
                                                </p>
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

                            {/* Card 2 */}
                            <div className="w-full h-full relative flex flex-col lg:flex-row items-center rounded-2xl lg:rounded-3xl bg-card border-2 border-[#172746] border-border/50 hover:border-border/100 transition-colors" style={{ opacity: 1, transform: 'none' }}>
                                <div className="group relative flex size-full rounded-xl p-4 lg:p-6 lg:rounded-3xl flex-1">
                                    <div className="absolute inset-px z-10 rounded-3xl bg-[#000107]"></div>
                                    <div className="relative z-30 w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="my-auto w-full lg:w-auto overflow-hidden">
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover bg-transparent"
                                                    style={{ backgroundColor: 'transparent' }}
                                                >
                                                    <source src="/Connect to our servers.mov" type="video/mp4; codecs=hvc1" />
                                                    <source src="/Connect.webm" type="video/webm" />
                                                </video>
                                            </div>
                                            <div className="mt-4 md:mt-5">
                                                <h3 className="text-lg font-semibold flex items-center gap-2">Connect to our Servers</h3>
                                                <p className="text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-start text-muted-foreground">
                                                    Link your node to our high-performance P2P marketplace and access limitless computing power.
                                                </p>
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

                            {/* Card 3 */}
                            <div className="w-full h-full relative flex flex-col lg:flex-row items-center rounded-2xl lg:rounded-3xl bg-card border-2 border-[#172746] border-border/50 hover:border-border/100 transition-colors" style={{ opacity: 1, transform: 'none' }}>
                                <div className="group relative flex size-full rounded-xl p-4 lg:p-6 lg:rounded-3xl flex-1">
                                    <div className="absolute inset-px z-10 rounded-3xl bg-[#000107]"></div>
                                    <div className="relative z-30 w-full">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="my-auto w-full lg:w-auto overflow-hidden">
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover bg-transparent"
                                                    style={{ backgroundColor: 'transparent' }}
                                                >
                                                    <source src="/payouts.mov" type="video/mp4; codecs=hvc1" />
                                                    <source src="/Instant payouts.webm" type="video/webm" />
                                                </video>
                                            </div>
                                            <div className="mt-4 md:mt-5">
                                                <h3 className="text-lg font-semibold flex items-center gap-2">Instant Payouts</h3>
                                                <p className="text-sm bg-gradient-to-r from-[#7F8796] to-white text-transparent bg-clip-text bg-300% text-start text-muted-foreground">
                                                    Receive instant rewards in ETH or NAI as your node processes AI workloads.
                                                </p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;