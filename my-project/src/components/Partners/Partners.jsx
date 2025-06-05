import React from 'react'

const Partners = () => {
  return (
    <div class="bg-center bg-no-repeat bg-yellow-500 bg-blend-multiply text-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Trusted Parters</h1>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/AVA.png" alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/vljb.png" alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/vaschool.png" alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/wanderlust.png" alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src="/img/chaticons.png" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Partners