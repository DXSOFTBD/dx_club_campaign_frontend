"use client";
import Image from "next/image";
import { useState } from "react";
import { SuccessModal, WarningModal } from "@/components/Modals";
import { ImeiForm } from "@/components/Forms";
import { ShapeDecorations } from "@/components/Decorations";
import axios from '@/axios/config';
import Link from 'next/link';

interface ApiResponse {
  status: boolean;
  message: string;
  instruction?: string;
}

const Hero = () => {
  const [imei, setIMEI] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post<ApiResponse>('/checkIMEI', { 
        imei 
      });

      setResponse(data);
      
      if (data.status) {
        setIsSuccessModalOpen(true);
      } else {
        setIsWarningModalOpen(true);
      }
    } catch (error) {
      setResponse({
        status: false,
        message: 'An error occurred while checking the IMEI. Please try again.'
      });
      setIsWarningModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Content Column */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Welcome to DX Club
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Check Your Luck with{" "}
                <span className="relative inline-block text-blue-600 dark:text-blue-400">
                  DX Tel
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900 -z-10 transform -rotate-2"></span>
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience Bangladesh's #1 after-sales service for Xiaomi smartphones. 
                Our cutting-edge technology and expert engineers ensure unmatched service quality.
              </p>
            </div>

            <ImeiForm
              imei={imei}
              setIMEI={setIMEI}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verify your Xiaomi device purchased from DX Tel Store</span>
            </div>
          </div>

          {/* Image Column */}
          <div className="hidden lg:block flex-1">
            <div className="relative">
              <ShapeDecorations />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/DX Logo-01.png"
                  width={750}
                  height={750}
                  alt="DX Logo"
                  className="w-full h-auto transform transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message={response?.message}
        instruction={response?.instruction}
      />

      <WarningModal
        isOpen={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        message={response?.message}
      />
    </section>
  );
};

export default Hero;