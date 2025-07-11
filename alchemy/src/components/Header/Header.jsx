import React from 'react'
import Logo from '../../assets/img/alchemy.png'
import * as motion from "motion/react-client"
import { Link } from "react-router-dom";
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}
const Header = () => {
  return (
    <motion.div
    >
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link to="/dp-chartam-project/" className="flex items-center space-x-5 rtl:space-x-reverse">
            <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            src={Logo} className="h-24 dark:invert" alt="Alchemy Logo" />
            </Link>
            <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}    
                >
                <Link to="/dp-chartam-project/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}       
                >
                <Link to="/dp-chartam-project/about/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}      
                >
                <Link to="/dp-chartam-project/services/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}      
                >
                <Link to="/dp-chartam-project/contact/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </motion.li>
            </ul>
            </div>
        </div>
        </nav>
    </motion.div>
  )
}

export default Header