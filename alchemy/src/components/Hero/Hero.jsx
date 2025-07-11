import React from 'react'
import * as motion from "motion/react-client"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
        <section className="bg-right bg-no-repeat bg-[url('/img/girlwipad.png')] bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</motion.h1>
                <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  .75,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Alchemy’s mission is to use a combination of powerful technology and a highly skilled workforce to create a virtual extension to a variety of service-oriented teams providing highly skilled and experienced personnel that assist in administration needs; thereby increasing your staff capacity, operations and efficiency.
                </motion.p>
                <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  .75,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    “Whether you are a corporation, private practice or small business, Alchemy will be your virtual partner in delivering the best quality service experience to your clientele. Whichever part of the world or what time zone you are in, we work while you sleep. in short, WE DELIVER. Alchemy takes pride and commitment to being the virtual extension of your team. Let’s work together!”
                </motion.p>
                <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Marinez Burnett – Founder and President
                </motion.p>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  1.25,
                    ease: [0, 0.71, 0.2, 1.01],
                    
                }}
                className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <Link to="/dp-chartam-project/about/" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Learn more about us
                </Link>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default Hero