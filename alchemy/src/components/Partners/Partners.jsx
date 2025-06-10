import React from 'react'
import ava from '../../assets/img/AVA.png'
import vljb from '../../assets/img//vljb.png'
import vaschool from '../../assets/img//vaschool.png'
import wanderlust from '../../assets/img//wanderlust.png'
import chaticons from '../../assets/img//chaticons.png'

const Partners = () => {
  return (
    <div class="bg-center bg-no-repeat bg-yellow-500 bg-blend-multiply text-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Trusted Parters</h1>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div>
                <img class="h-auto max-w-full rounded-lg" src={ava} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={vljb} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={vaschool} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={wanderlust} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={chaticons} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Partners