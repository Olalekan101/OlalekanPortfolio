import {Contenfull} from "@/app/Contenful/ContenfulData"
import OutlineButton from "../Button/OutlineButton";
import FilledButton from "../Button/FilledButton"
import Resume from "../Button/ResumeButton";


export default async function HerobuttonNwork() {
     const data = await Contenfull();
     
  return (
    <div>
        {
            data.map(x=>(
                <div key={x.sys.id} className="flex flex-col gap-2 sm:flex-row mt-2 sm:mt-5 items-center  " >
                    <div className="flex divide-x-[1px] divide-slate-300/70 " >
                    <div className="pr-2" ><FilledButton title="Contact" link="/" /></div>
                    
                    <div className=" flex md:hidden pl-2 " ><Resume/></div>
                    </div>
                    <p className="text-green-500 text-[10px] sm:text-base opacity-50 " >{x.fields.projects}</p>
                </div>
            ))
        }
    </div>
  )
}
