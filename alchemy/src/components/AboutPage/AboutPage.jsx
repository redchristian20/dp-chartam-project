import React from 'react'
import * as motion from "motion/react-client"
const AboutPage = () => {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div>
                    <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/u31qwQUeGuM?si=-L0D-JApdBIkD_rI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <section className="bg-right bg-no-repeat bg-[url('/img/girlwipad.png')] bg-gray-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-10">
                    <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                           WHO WE ARE
                    </motion.h1>
                    <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay:  1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        ALCHEMY'S MISSION IS TO USE A COMBINATION OF POWERFUL TECHNOLOGY AND A HIGHLY SKILLED
                        WORKFORCE TO CREATE A VIRTUAL EXTENSION... VIRTUAL EXTENSION TO A VARIETY OF
                        SERVICE-ORIENTED TEAM PROVIDING HIGHLY SKILLED AND EXPERIENCED PERSONNEL THAT ASSIST IN
                        ADMINISTRATION NEEDS: THEREBY INCREASING YOUR STAFF CAPACITY, OPERATIONS AND EFFICIENCY.
                    </motion.p> 
                </div>
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-10">
                    <motion.h2
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
                           OUR HISTORY
                    </motion.h2>
                    <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-4 text-1xl font-extrabold tracking-tight leading-none text-yellow-500 md:text-2xl lg:text-3xl">
                           PROVIDING THE BEST
                    </motion.h3>
                    <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: .8,
                        delay:  2.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Alchemy was founded in 2008 by Marinez Burnett. Marinez is an RN, and her objective for Alchemy was to approach medical transcription with the same care and attention to detail as would be applied to an actual patient. Additional services such as virtual assistance and call center operations have been added in recent years.
                    </motion.p> 
                    <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: .8,
                        delay:  2.75,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Alchemy was founded on the principle that quality must be paramount to everything they do because their work directly impacts participants. The highest level of quality can only be achieved when the utmost attention to detail is applied in every step of the process, and the work is performed by people who have the training and experience to do things right. Because of this, all medical transcription work is performed by employees who have earned a Bachelor of Science degree in Nursing and are Board Licensed registered nurses. Alchemy is the only company in the world to hold this standard this high for its transcription staff.
                    </motion.p>
                    <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: .8,
                        delay:  3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Over the years, Alchemy has evolved and expanded its services catering to a variety of service-oriented industries. They provide outsourcing needs in the medical, insurance, social media, media, and contracting businesses.
                    </motion.p>
                </div>
            </section>
            <section className="dark:bg-gray-900 bg-left bg-no-repeat bg-gray-700 bg-blend-multiply bg-contain">
                        <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay:  3.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                
                            }}
                        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-400 md:text-5xl lg:text-6xl dark:text-white">Corporate <mark className="px-2 text-white bg-blue-600 rounded-sm dark:bg-blue-500">Office</mark></h1>
                            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">5670 Wilshire Blvd, Ste 1800, Los Angeles, CA</p>
                            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">626MB 2nd floor, GV Tower, Osmeña Blvd, Brgy 17, Cebu City, Philippines</p>
                        </motion.div>
                        
                        
                    </section>
        </div>
  )
}

export default AboutPage