import Image from "next/image"

const Button = ({label, iconUrl, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'text-white border-coral-red bg-coral-red'} rounded-full`}>{label}
    {iconUrl && 
      <Image src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>
    }
    </button>
  )
}

export default Button