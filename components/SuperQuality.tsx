import { arrowRight } from "@/public/icons"
import Button from "./Button"
import Image from "next/image"
import { shoe8 } from "@/public/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between item-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanguin capitalize text-4xl font-bold lg:max-w-lg">
        We Prodive you
        <span className="text-coral-red">Super</span>
        <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discoverstlish nike arriaval, quality comfort, and innovation for your active life

          Discoverstlish nike arriaval, quality comfort, and innovation for your active life
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Discoverstlish nike arriaval, quality comfort, and innovation for your active life</p>
        <div className="mt-11">
          <Button label="View Details" iconUrl={arrowRight}/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={shoe8} alt="shoes" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality