import {BsFillRocketFill} from "react-icons/bs"
import {IoDiamondSharp} from "react-icons/io5"
import {BsHourglassSplit} from "react-icons/bs"



export default function WebsiteHelp() {
  return (
    <div className="flex flex-col gap-6 mt-10 md:mt-16">
        <div className=" text-center md:text-2xl opacity-50 " ><p>How a website can help your <span className="text-green-500 font-bold" >business</span></p></div>
        <div className=" flex justify-center items-end gap-2 text-4xl md:text-6xl w-full opacity-70 text-green-500 overflow-x-auto">
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <BsFillRocketFill/>
            <div className="text-xl text-center" ><p>Help convert leads and boost sales</p></div>
           </div>
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <IoDiamondSharp/>
            <div className="text-xl text-center" ><p>Increase your business's perceived value.</p></div>
           </div>
           <div className=" flex flex-col gap-2 items-center border border-slate-50/20 p-2 rounded-md " >
           <BsHourglassSplit/>
            <div className="text-xl text-center" ><p>automate tasks and save time</p></div>
           </div>
          
        </div>
        <div id="Projects" ></div>
    </div>
  )
}
