'use client'
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Roadmap = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000 })
    ]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const phases = [
        {
            title: "Phase 1: Token Genesis & Network Initiation",
            items: [
                "$NAI Token Generation Event and public launch via Proof",
                "Initial DEX liquidity deployment with structured liquidity controls",
                "Launch of staking protocol with emission logic and treasury routing",
                "Foundation of treasury and operational fund structures",
                "Public release of project documentation, Gitbook, and initial SDKs"
            ]
        },
        {
            title: "Phase 2: GPU Marketplace Activation",
            items: [
                "Wallet-based rental flow integrated with ETH + $NAI payments",
                "dApp ReDesign",
                "Rental data analytics + real-time performance metrics",
                "Basic hardware compatibility validation flow",
                "GPU host onboarding program with incentive layering"
            ]
        },
        {
            title: "Phase 3: Ecosystem Utility & Token Flow",
            items: [
                "SuperApp AI execution layer launched (backend routed through Nebula GPUs)",
                "Referral and incentive system live across hosts, renters, and partners",
                "Fallback compute utility (mining, ZK proofs, rendering, node ops) activated",
                "Onchain revenue from ETH routed into buy-and-convert mechanisms for $NAI",
                "Strategy Hub live — token-gated staking dashboard for GPU monetization"
            ]
        },
        {
            title: "Phase 4: Infrastructure & Hosting Network Scaling",
            items: [
                "Validator role system + host reliability scoring launched",
                "Node clustering enabled for enterprise or institutional renters",
                "Reputation-based reward tiers for high-performance nodes",
                "Onboarding of professional GPU farms and data centers",
                "Host-side benchmarking and optimization recommendations rolled out"
            ]
        },
        {
            title: "Phase 5: Enterprise Integration & Interoperability",
            items: [
                "Launch of white-label APIs for direct GPU access",
                "Integration with enterprise LLM pipelines, rendering engines, and ML ops platforms",
                "Partner portal for SuperApp inclusion, billing, and usage tracking",
                "Support for stablecoin-based usage and billing flows",
                "Escrow and collateral mechanisms for long-term compute contracts"
            ]
        },
        {
            title: "Phase 6: Liquidity Layer & Cross-Chain Deployment",
            items: [
                "Liquidity coordination across major DEXs and CEX listings",
                "Institutional market-making partnerships established",
                "Launch of $NAI lending/borrowing for verified hosts (collateralized)",
                "Vaults for ecosystem rewards (host rebates, usage incentives, grants)",
                "Deployment of modular liquidity routers across AI tooling partners"
            ]
        },
        {
            title: "Phase 7: Global Distribution",
            items: [
                "Regional hosting clusters in EU, Asia, LatAm with language-localized dashboards",
                "GPU slot auctions for SuperApp visibility & preferred routing",
                "Compute-based identity system for contributor reputation tracking",
                "AI grant pool for mission-aligned startups building on Nebula infrastructure",
                "Autonomous fee redistribution governed by network-wide performance triggers"
            ]
        }
    ];

    return (
        <div id="roadmap" className="h-full mx-auto w-full max-w-screen-xl px-4 flex flex-col items-center justify-center py-12 md:px-0 relative">
            <div className="w-full h-full max-w-full" style={{ opacity: 1, transform: 'none' }}>
                <div className="flex flex-col items-center justify-center my-10">
                    <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_100%)]"></span>
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Roadmap
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Nebula AI Roadmap</h2>
                </div>

                <div className="embla w-full" ref={emblaRef}>
                    <div className="embla__container">
                        {phases.map((phase, index) => (
                            <div key={index} className="embla__slide flex-[0_0_90%] min-w-0 pl-4">
                                <div className="group relative flex size-full rounded-xl">
                                    <div className="absolute inset-px z-10 rounded-xl bg-[#000107]"></div>
                                    <div className="relative z-30 w-full">
                                        <div className="gradient-circle blur-2xl absolute right-1 top-16"></div>
                                        <div className="embla__slide__number bg-gradient-to-b text-white font-nunito p-[1em] py-10 flex justify-between items-left flex-col gap-[0.75em] backdrop-blur-[12px] h-full -z-20 to-[#052afc28] via-[rgba(23,25,81,0.07)] from-[rgba(23,25,81,0.2)]">
                                            <div className="w-full max-w-[100%] pl-4 mt-5">
                                                <h3 className="text-xl text-white font-bold">{phase.title}</h3>
                                                <ul className="my-10">
                                                    {phase.items.map((item, i) => (
                                                        <li key={i} className="flex gap-2 items-center my-2">
                                                            <Image
                                                                src="/assets/Exclude.png"
                                                                alt=""
                                                                width={12}
                                                                height={12}
                                                                className="flex-shrink-0"
                                                            />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Image
                                                src="/images/road.png"
                                                alt="roadmap"
                                                width={30}
                                                height={30}
                                                className="ml-auto mt-2"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        style={{
                                            opacity: 0.8,
                                            background: 'radial-gradient(200px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 100%)'
                                        }}
                                    ></div>
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-xl bg-border duration-300 group-hover:opacity-100"
                                        style={{
                                            background: 'radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), #38bdf8, #3b82f6, hsl(var(--border)) 100%)'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="embla__controls mt-8">
                        <div className="embla__buttons flex gap-4 justify-center">
                            <button
                                className="embla__button embla__button--prev bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                                onClick={scrollPrev}
                            >
                                <svg className="embla__button__svg w-6 h-6" viewBox="0 0 532 532">
                                    <path fill="currentColor" d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"></path>
                                </svg>
                            </button>
                            <button
                                className="embla__button embla__button--next bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                                onClick={scrollNext}
                            >
                                <svg className="embla__button__svg w-6 h-6" viewBox="0 0 532 532">
                                    <path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;