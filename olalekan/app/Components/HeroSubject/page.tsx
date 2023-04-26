import Contenfull from "@/app/Contenful/page"
import HerobuttonNwork from "./HerobuttonNwork";
import WebdevIcons from "../WebdevIcons/WebdevIcons";
import MotionIcons from "../MotionIcons/MotionIcons";

export default async function HeroSubject() {
    const data = await Contenfull();
    
  return (
    <div className="flex flex-col">
    {data.map(x=>(
        <div key={x.sys.id} className="text-center mt-12 sm:mt-12 sm:text-left " >
        <h1 className=" text-[24px] font-bold sm:text-3xl mb-2 sm:mb-3 leading-8 sm:leading-10" >{x.fields.heroHeading}</h1>
        <p className=" hidden sm:block text-[12px] sm:text-sm leading-relaxed opacity-70" >{x.fields.heroSubHeading}</p>
        </div>
    ))}
    {/* @ts-expect-error Async Server Component */}
    <HerobuttonNwork/>
    <div className="mt-4 opacity-50 w-full sm:divide-x-2 flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:items-start" >
      <div className=" sm:pr-4">
      <p className=" hidden sm:block text-xs mb-2" >Web Tech Stack</p>
    {/* @ts-expect-error Async Server Component */}
    <WebdevIcons/>
      </div>

      <div className=" sm:pl-4">
      <p className=" hidden sm:block text-xs mb-2" >Motion Design Stack</p>
    {/* @ts-expect-error Async Server Component */}
    <MotionIcons/>
      </div>
    </div>
    </div>
  )
}
