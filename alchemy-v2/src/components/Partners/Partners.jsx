import React from 'react'
import ava from '../../assets/img/AVA.png'
import vljb from '../../assets/img//vljb.png'
import vaschool from '../../assets/img//vaschool.png'
import wanderlust from '../../assets/img//wanderlust.png'
import chaticons from '../../assets/img//chaticons.png'
import * as motion from "motion/react-client"

const Partners = () => {
  return (
    <motion.div 
    className="bg-center bg-no-repeat bg-yellow-500 bg-blend-multiply text-center p-4">
        <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  2,
                    ease: [0, 0.71, 0.2, 1.01],
                    
                }}
        className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">Trusted Parters</motion.h1>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay:  2,
                    ease: [0, 0.71, 0.2, 1.01],
                    
                }}
        className="grid grid-cols-3 md:grid-cols-5 gap-20 max-w-screen-xl flex-wrap items-center justify-between mx-auto p-2">
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                <img className="h-auto max-w-full rounded-lg" src={ava} alt=""/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                <img className="h-auto max-w-full rounded-lg" src={vljb} alt=""/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                <img className="h-auto max-w-full rounded-lg" src={vaschool} alt=""/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                <img className="h-auto max-w-full rounded-lg" src={wanderlust} alt=""/>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >
                <img className="h-auto max-w-full rounded-lg" src={chaticons} alt=""/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Partners