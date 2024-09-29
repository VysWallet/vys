"use client";

import { FeatureCard } from "@/components/feature-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full py-8 h-full">
      <div className="min-h-screen flex flex-col space-y-24 h-full flex-1">
        <header className="flex justify-between px-20">
          <a href="/">
            <Image src="/_static/vys.png" alt="Vys" height={60} width={60} />
          </a>
          <div className="flex text-sm gap-8 font-bold border rounded-xl px-4 h-10">
            <button className="hover:underline">About Us</button>
            <button className="hover:underline">Contact Us</button>
            <button className="hover:underline">FAQ</button>
            <button className="hover:underline">Exchange</button>
          </div>
        </header>

        <div className="h-[60px]"></div>

        <section className="flex items-center justify-center flex-col w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <h1 className="font-bold text-8xl">Vys Wallet</h1>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">
                Explore the crypto universe <br /> with Vys Wallet&rsquo;s
                unmatched security
              </h1>
              <p className="text-zinc-400 font-extralight">
                With the lowest fees and top-tier protection, buy, sell, or swap
                over 300 assets <br /> with total confidence and convenience,
                all in one place.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center space-y-20">
        <h1 className="text-8xl font-bold text-center">
          Advantages to boost <br />
          your crypto journey
        </h1>
        <div className="flex items-center justify-center gap-20 w-full px-20">
          <FeatureCard
            title="Intelligent Crypto Assistant"
            description="Meet Vys Bot, your AI-driven agent that helps optimize transactions, monitor trends, and assist you with real-time decisions."
            src="vys.png"
            size="large"
          />

          <div className="flex gap-4">
            <div className="space-y-2">
              <FeatureCard
                title="Unmatched Security"
                description="Your assets are protected by our state-of-the-art, multi-layered security protocols, ensuring the safest environment for your crypto transactions."
              />
              <FeatureCard
                title="Market-Leading Low Fees"
                description="Maximize your profits with the lowest transaction fees available, making your crypto operations more cost-efficient."
              />
            </div>
            <div className="space-y-2">
              <FeatureCard
                title="Seamless Asset Management"
                description="Easily buy, sell, and swap over 300 cryptocurrencies in one platform, giving you complete control over your crypto portfolio."
              />
              <FeatureCard
                title="Instant Transactions"
                description="Experience lightning-fast transactions with near-instant confirmations, ensuring you never miss an opportunity in the crypto market."
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col px-20">
        <div className="flex flex-col border rounded-xl dark:bg-white bg-black mt-60 h-[200px]">
          <p className="text-zinc-400 text-xs">
            Vys wallet users are responsible for storing their own recovery
            phrase. If the recovery phrase <br /> is lost, the user might not be
            able to retrieve their private keys.
          </p>
        </div>
      </footer>
    </div>
  );
}
