'use client'
import { useState } from "react"
import { arrowRight } from "@/public/icons"
import Button from "./Button"
import { statistics, shoes } from "@/constants"
import { bigShoe1 } from "@/public/images"
import Image from "next/image"
import ShoeCard from "./ShoeCard"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1) 

  return (
    <section id="home" className="flex xl:flex-row flex-col w-full border-2 border-red-500 p-2 min-h-screen gap-10 max-container justify-center">
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanguin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br /> 
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discoverstlish nike arriaval, quality comfort, and innovation for your active life
        </p>
        <Button label="Show now" iconUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image  src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard 
                imgURL = {shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero