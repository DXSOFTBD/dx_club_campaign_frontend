"use client";
import Image from "next/image";
import { useState } from "react";
import { FormEvent } from 'react';
import axios from '@/axios/config';
import axios_request from 'axios';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, GiftTopIcon } from '@heroicons/react/24/solid'
import { ImeiForm } from "@/components/Forms";
import { SuccessModal, WarningModal } from "@/components/Modals";

interface ApiResponse {
  status: boolean;
  message: string;
  instruction?: string;
}

const Hero = () => {
  const [imei, setIMEI] = useState("");
  const [message, setMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [warningPopupVisible, setWarningPopupVisible] = useState(false);
  const [data, setData] = useState(null);
  const [instruction, setInstruction] = useState(null);
  const [open, setOpen] = useState(false)
  const https = require('https') // Import the 'https' module for custom agent
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/checkIMEI?imei=', { imei }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //     });

  //     setMessage(response.data.message);
  //     setData(response.data.message);
  //     setInstruction(response.data.instruction);

  //     if (response.data.status) {
  //       setPopupVisible(true);
  //       setWarningPopupVisible(false);
  //       setOpen(true);
  //     } else {
  //       setPopupVisible(false);
  //       setWarningPopupVisible(true);
  //     }

  //   } catch (error) {
  //     setMessage('Error submitting form ' + error);
  //   }
  // };

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
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Welcome to DX Club Campaign Platform
              </h4> */}
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Welcome to DX Club Campaign Platform
              </span>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Check your Luck from {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  DX Tel
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                The #1 After sales service solution provider in Bangladesh. Quickfix's cutting-edge technology, streamlined operational process, and highly trained engineers made Xiaomi Bangladesh the No. 1 after-sales service smartphone brand in Bangladesh.
              </p>

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

              {/* Popup */}
              <Dialog open={popupVisible} onClose={setPopupVisible} className="relative z-10">
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                      transition
                      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                            <GiftTopIcon aria-hidden="true" className="size-6 text-blue-600" />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                              DX Club Reward Notification
                            </DialogTitle>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                {message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {instruction}
                            {/* Please contact with that the Shop Manager from where you have Purchased this Device and Collect your Reward */}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        {/* <button
                          type="button"
                          onClick={() => setPopupVisible(false)}
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Deactivate
                        </button> */}
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setPopupVisible(false)}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Close
                        </button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>

              <Dialog open={warningPopupVisible} onClose={setWarningPopupVisible} className="relative z-10">
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                      transition
                      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                            <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                              Warning
                            </DialogTitle>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                {message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Please contact with that the Shop Manager from where you have Purchased this Device and Collect your Reward
                          </p>
                        </div>
                      </div> */}
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        {/* <button
                          type="button"
                          onClick={() => setPopupVisible(false)}
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Deactivate
                        </button> */}
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setWarningPopupVisible(false)}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Close
                        </button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>

              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={imei}
                      onChange={(e) => setIMEI(e.target.value)}
                      type="text"
                      name="imei"
                      placeholder="Enter your IMEI"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      type="submit"
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Please provide IMEI of your purchased Xiaomi Mobile from DX Tel Store

                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-auto w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/DX Logo-01.png"
                    width={750}
                    height={750}
                    alt="DX Logo"
                  // fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
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
          </div>
        </div >
      </section >
    </>
  );
};

export default Hero;
