"use client";
import Image from "next/image";
import { useState } from "react";
import { FormEvent } from 'react';
import axios from '@/axios/config';
import axios_request from 'axios';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, GiftTopIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  const [imei, setIMEI] = useState("");
  const [message, setMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [warningPopupVisible, setWarningPopupVisible] = useState(false);
  const [data, setData] = useState(null);
  const [instruction, setInstruction] = useState(null);
  const [open, setOpen] = useState(false)
  const https = require('https') // Import the 'https' module for custom agent

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/checkIMEI?imei=', { imei }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      setMessage(response.data.message);
      setData(response.data.message);
      setInstruction(response.data.instruction);

      if (response.data.status) {
        setPopupVisible(true);
        setWarningPopupVisible(false);
        setOpen(true);
      } else {
        setPopupVisible(false);
        setWarningPopupVisible(true);
      }

    } catch (error) {
      setMessage('Error submitting form ' + error);
    }
  };


  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Welcome to DX Club Campaign Platform
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Check your Luck from {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  DX Tel
                </span>
              </h1>
              <p>
                The #1 After sales service solution provider in Bangladesh. Quickfix's cutting-edge technology, streamlined operational process, and highly trained engineers made Xiaomi Bangladesh the No. 1 after-sales service smartphone brand in Bangladesh.
              </p>

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

              <div className="mt-10">
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

                {/* <p className="mt-5 text-black dark:text-white">
                  {message && <p>{message}</p>}
                </p> */}
              </div>
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
          </div>
        </div >
      </section >
    </>
  );
};

export default Hero;
