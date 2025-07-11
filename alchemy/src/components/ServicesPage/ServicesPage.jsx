import React from 'react'
import * as motion from "motion/react-client"
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import { Link } from "react-router-dom";
const ServicesPage = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900 ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  .5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#">
                            <img class="rounded-t-lg" src={img1} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Insurance Agency</h5>
                            </a>
                            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                   Oversee and maintain customer relationship management systems.
                                </li>
                                <li>
                                    Organization, documentation and processing of insurance policy applications.
                                </li>
                                <li>
                                    Insurance agent licensing application and renewal.
                                </li>
                                <li>
                                    Medical exam scheduling for insurance policy holders or applicants.
                                </li>
                                <li>
                                    Inbound or outbound client calls or emails.
                                </li>
                                <li>
                                    Administrative tasks.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  .75,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                     class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#">
                            <img class="rounded-t-lg" src={img2} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Medical Practice</h5>
                            </a>
                            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                   Appointment confirmation.
                                </li>
                                <li>
                                    Patient chart preparation and documentation.
                                </li>
                                <li>
                                    Inbound patient calls and reviews of custom preventative care plans.
                                </li>
                                <li>
                                    Medical record data entry and/or management.
                                </li>
                                <li>
                                    Medical transcription.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                     class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#">
                            <img class="rounded-t-lg" src={img3} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Billing and Coding Services</h5>
                            </a>
                            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                   Ensures that all bills are submitted with the correct information.
                                </li>
                                <li>
                                    Medical Coding Services.
                                </li>
                                <li>
                                    Medical Claims Processing.
                                </li>
                                <li>
                                    Accounts Receivables Management.
                                </li>
                                <li>
                                    Revenue Cycle Management.
                                </li>
                                <li>
                                    Specialized Medical Billing.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  1.25,
                        ease: [0, 0.71, 0.2, 1.01],
                    }} class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <a href="#">
                            <img class="rounded-t-lg" src={img4} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Property Management Team</h5>
                            </a>
                            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                   Manage client’s property software system.
                                </li>
                                <li>
                                    Coordinate and manage property or unit maintenance i.e. security, cleanliness, guest accommodation issues and/or damages.
                                </li>
                                <li>
                                    Guest credit card transaction processing, refunding and/or resolutions.
                                </li>
                                <li>
                                    Administrative tasks.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            <section class="bg-cover bg-center bg-[url('/img/img5.jpg')] bg-gray-900 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-justify py-24 lg:py-56">
                    <div class="text-center">
                        <motion.h1
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 1.5,
                                            ease: [0, 0.71, 0.2, 1.01],
                                        }}
                                        class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            We Are Waiting to Serve You!
                        </motion.h1>
                    </div>
                    <motion.h2
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 1.75,
                                            ease: [0, 0.71, 0.2, 1.01],
                                        }} 
                    class="mb-4 text-4x2 font-extrabold tracking-tight sm:px-16 lg:px-48 leading-none text-yellow-500 md:text-3xl lg:text-4xl">
                        Locations
                    </motion.h2>
                    <motion.p
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay:  2,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                    
                    class="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        5070 Indigo Bay Blvd. Suite 202 Estero FL
                        GSMA Bldg. Gov. Luna cor. Ortega Sts. Brgy 4 City of San Fernando La Union Philippines
                    </motion.p>
                    <motion.p
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay:  2.25,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                    class="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        GSMA Bldg. Gov. Luna cor. Ortega Sts. Brgy 4 City of San Fernando La Union Philippines
                    </motion.p>
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  2.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="/dp-chartam-project/contact/" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Contact us
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default ServicesPage