
import Contenfull from "@/app/Contenful/page"
import Image from "next/image"


export default async function WebdevIcons() {
    const data = await Contenfull()
    // const windowSize = useRef([window.innerWidth]);
    // console.log(windowSize.current[0]);
  
  return (
    <div className="">
        {data.map(x=>(
            <div key={x.sys.id} className="flex gap-2" >
               {x.fields.webTechIcons?.map(y=>(
                 <Image
                 src={"https:" + y.fields.file.url}
                 alt="Web tech stack"
                 className="object-contain w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]  "
                 width={25}
                 height={25}
                 />
               ))}
            </div>
        ))}
    </div>
  )
}
