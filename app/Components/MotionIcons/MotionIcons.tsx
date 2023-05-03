import {Contenfull} from "@/app/Contenful/ContenfulData"
import Image from "next/image"

export default async function MotionIcons() {
    const data = await Contenfull()
    
  return (
    <div className="">
        {data.map(x=>(
            <div key={x.sys.id} className="flex gap-2" >
               {x.fields.motionDesignIcons?.map(y=>(
                <Image
                id={y.fields.file.url}
                src={"https:" + y.fields.file.url}
                alt="Web tech stack"
                className="object-contain w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] "
                width={25}
                height={25}
                />
               ))}
            </div>
        ))}
    </div>
  )
}
