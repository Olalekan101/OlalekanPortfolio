import {BsFillRocketFill} from "react-icons/bs"
import {IoDiamondSharp} from "react-icons/io5"
import {BsHourglassSplit} from "react-icons/bs"



export default function WebsiteHelp() {
  return (
    <div className="flex flex-col mt-10 md:mt-16">
        <div className=" text-center md:text-xl opacity-50 " ><p>How a website can help your <span className="text-green-500 font-bold" >business</span></p></div>

        <hr className=" h-[1px] w-auto opacity-50 my-4 md:my-6 " />

        <div className=" flex justify-center items-end gap-2 text-4xl md:text-6xl w-full opacity-70 text-green-500 overflow-x-auto">
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <BsFillRocketFill/>
            <div className="md:text-sm text-slate-100 font-light text-[10px] text-center leading-normal" ><p>Help convert leads and<br className=" hidden md:block " /> boost sales</p></div>
           </div>
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <IoDiamondSharp/>
            <div className="md:text-sm text-slate-100 font-light text-[10px] text-center leading-normal" ><p>Increase your business&apos;s <br className=" hidden md:block " />perceived value.</p></div>
           </div>
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <BsHourglassSplit/>
            <div className="md:text-sm text-slate-100 font-light text-[10px] text-center leading-normal" ><p>automate tasks and <br className=" hidden md:block " />save time</p></div>
           </div>
          
        </div>
        <div id="Projects" ></div>
    </div>
  )
}
