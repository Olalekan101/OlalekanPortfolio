import {AiFillStar} from "react-icons/ai"


export default function BuisnessTips({children, className}) {
  return (
    <div className={className} >
       <div className="relative" >
       <p className=" group text-xs md:text-sm opacity-50 hover:opacity-100 transition-all duration-200 delay-200 ease-in border-2 border-white/30 p-2 flex w-full rounded-md " >
            {children}
        </p>
        {/* <div className=" absolute top-0 group-hover:text-yellow-500 text-sm text-yellow-500/70 " ><AiFillStar/></div> */}
       </div>
    </div>
  )
}
