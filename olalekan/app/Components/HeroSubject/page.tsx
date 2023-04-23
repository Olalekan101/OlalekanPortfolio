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
        <p className=" hidden sm:inline-block text-[12px] sm:text-lg" >{x.fields.heroSubHeading}</p>
        </div>
    ))}
    {/* @ts-expect-error Async Server Component */}
    <HerobuttonNwork/>
    <div className="mt-4 opacity-50 w-full flex flex-col items-center sm:items-start" >
      <div>
      <p className=" hidden sm:block text-xs mb-2" >Web Tech Stack</p>
    {/* @ts-expect-error Async Server Component */}
    <WebdevIcons/>
      </div>
      <div>
      <p className=" hidden sm:block text-xs mb-2" >Motion Design Stack</p>
    {/* @ts-expect-error Async Server Component */}
    <MotionIcons/>
      </div>
    </div>
    </div>
  )
}
