"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-600 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-blue-600 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-600 "
        ></motion.div>

        <div className="absolute inset-auto z-50 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Nebula AI?</AccordionTrigger>
              <AccordionContent>
              Nebula AI is a decentralized GPU marketplace where anyone can rent compute power, stake $NAI for rewards, and access AI tools—all without relying on centralized cloud providers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does renting a GPU work?</AccordionTrigger>
              <AccordionContent>
              Connect your wallet, choose the GPU specs you need, and pay with $NAI. Your rental is instantly set up, and you can start running AI models, training LLMs, or handling any high-performance task.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is staking, and why should I care?</AccordionTrigger>
              <AccordionContent>
              By staking $NAI, you earn passive rewards from platform fees, get discounted GPU rentals, and unlock priority access to the best machines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How is Nebula AI different from AWS, Google Cloud, or Vast AI?</AccordionTrigger>
              <AccordionContent>
              Nebula AI is fully decentralized, meaning no middlemen and lower costs. Instead of relying on centralized servers, users rent directly from GPU hosts worldwide, creating a fair and open marketplace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is the Super-App Marketplace?</AccordionTrigger>
              <AccordionContent>
              You don{`&apos`}t just rent GPUs—you can also use Nebula AI{`&apos`}s built-in AI tools. Run machine learning models, generate AI images, or fine-tune LLMs instantly, with no setup required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is Nebula AI secure?</AccordionTrigger>
              <AccordionContent>
              Yes. Your data is never exposed to hosts, and all transactions are handled via smart contracts. Everything is decentralized, trustless, and transparent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What is $NAI used for?</AccordionTrigger>
              <AccordionContent>
              $NAI is the core token of Nebula AI, used for GPU rentals, AI services, and staking rewards. As the ecosystem grows, so does the demand for $NAI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>How can I earn with Nebula AI?</AccordionTrigger>
              <AccordionContent>
              List your GPU and get paid in $NAI when users rent it. Staking also lets you earn a share of platform revenue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
              <AccordionContent>
              We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
    </div>
    
  );
};
