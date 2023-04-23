import Contenfull from "@/app/Contenful/page"
import Image from "next/image"

export default async function MotionIcons() {
    const data = await Contenfull()
    
  return (
    <div className="">
        {data.map(x=>(
            <div key={x.sys.id} className="flex gap-2" >
               {x.fields.motionDesignIcons?.map(y=>(
                 <Image
                 src={"https:" + y.fields.file.url}
                 alt="Web tech stack"
                 className="object-contain"
                 width={25}
                 height={25}
                 />
               ))}
            </div>
        ))}
    </div>
  )
}
