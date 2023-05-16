import { WebSitePortifolios } from "@/app/Contenful/ContenfulData"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BsGithub} from "react-icons/bs"
import Image from "next/image";

export const revalidate = 60; 

export default async function WebAndPhoneMockup() {

  const data = await WebSitePortifolios()
  // const {desktopSiteImages,process,mobileSiteImages,technologyUsed} = data.fields
  // const dataRange = data?.slice(0,2)  

  return (
    <>
    <div className="flex flex-col gap-10 md:gap-16 " >
    {data?.map(x=>(
    <div className="w-full flex flex-col md:flex-row md:even:flex-row-reverse gap-5 " >
          {/* Desktop Version */}
        <div key={x.sys.id} className=" relative shrink-0 flex overflow-auto scrollbar-thin snap-mandatory snap-center h-full w-full sm:w-[50%]  rounded-md " >
       {x.fields.desktopSiteImages?.map(img=>(
             <Image
             src={"https:" + img.fields.file.url}
             alt="Website Sample images"
             className="object-cover w-auto h-auto"
             width={500}
             height={500}
             />
       ))}
        {/* Mobile display */}
        <div className="absolute overflow-hidden scroll bottom-0 right-0 w-[100px] h-[150px] mr-2 mb-2 border-2 rounded-md bg-lightColor border-lightColor/50 " >
        {x.fields.mobileSiteImages?.map(img=>(
             <Image
             src={"https:" + img.fields.file.url}
             alt="Mobile Sample images"
             className="object-cover w-full h-full"
             width={100}
             height={150}
             />
       ))} 
        </div>
    </div>
    {/* Text Section */}
    <div className=" flex flex-col ">
        <div className="font-normal text-sm pb-2 md:text-base md:pb-0 opacity-90 underline hover:opacity-50 " ><a href={x.fields.siteLink}  target="_blank" >{x.fields.siteName}</a>
        </div>
        <div className="relative opacity-70 h-[220px] overflow-auto scrollbar-thin my-2 md:my-4 bg-teal-800/50 p-2 rounded-md " >
          { documentToReactComponents(x.fields.process)}
        </div>
        <div className=" flex gap-2 justify-between " >
        <div className="relative w-[25px] h-[25px] flex gap-2 opacity-50" >
        {x.fields.technologyUsed?.map(img=>(
             <Image
             src={"https:" + img.fields.file.url}
             alt="Website Sample images"
             className="object-contain w-full h-full"
             width={25}
             height={25}
             />
       ))}
        </div>
        <div>
          <a href={x.fields.githubRepo} target="_blank" className="text-lg text-yellow-50 flex gap-2" ><span className="text-xs opacity-50" >Source code</span><BsGithub/></a>
        </div>
        </div>
    </div>
    </div>
    ))}
    </div>
    </>
  )
}
