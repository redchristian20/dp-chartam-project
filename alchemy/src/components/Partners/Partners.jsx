import React from 'react'
import ava from '../../assets/img/AVA.png'
import vljb from '../../assets/img//vljb.png'
import vaschool from '../../assets/img//vaschool.png'
import wanderlust from '../../assets/img//wanderlust.png'
import chaticons from '../../assets/img//chaticons.png'

const Partners = () => {
  return (
    <div className="bg-center bg-no-repeat bg-yellow-500 bg-blend-multiply text-center p-4">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">Trusted Parters</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10 justify-center">
            <div>
                <img className="h-auto max-w-full rounded-lg" src={ava} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={vljb} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={vaschool} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={wanderlust} alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src={chaticons} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Partners