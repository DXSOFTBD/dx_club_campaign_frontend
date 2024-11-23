"use client";
import { ImeiForm } from '@/components/IMEIForms';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-[40%] top-0 h-[1000px] w-[1000px] rounded-full bg-purple-100 opacity-20 blur-3xl" />
        <div className="absolute right-[60%] top-0 h-[800px] w-[800px] rounded-full bg-blue-100 opacity-20 blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Check Your
              <span className="block text-purple-600">Device Rewards</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enter your device IMEI number and discover exclusive rewards waiting for you. Join DX Club for amazing tech benefits and special offers.
            </p>
            
            <div className="mt-10">
              <ImeiForm />
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative lg:mt-0">
            <Image
              src="/images/hero-device.png"
              alt="Smartphone with rewards"
              width={600}
              height={600}
              className="relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}