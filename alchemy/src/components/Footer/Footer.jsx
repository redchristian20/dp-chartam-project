import React from 'react'
import logo from '../../assets/img/alchemy.png'
import * as motion from "motion/react-client"

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <motion.img
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    src={logo} className="h-24 dark:invert" alt="Alchemy Logo" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.a
                        href="#" className="hover:underline me-4 md:me-6">Home</motion.a>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.a 
                        href="#" className="hover:underline me-4 md:me-6">About</motion.a>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.a 
                        href="#" className="hover:underline me-4 md:me-6">Services</motion.a>
                    </motion.li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Alchemy</a>. All Rights Reserved.</span>
            {//test
        }
        </div>
    </div>
  )
}
export default Footer