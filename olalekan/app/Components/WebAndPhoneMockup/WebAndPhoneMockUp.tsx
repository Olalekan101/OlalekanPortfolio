import { WebSitePortifolios } from "@/app/Contenful/page"


export default async function WebAndPhoneMockup({children,ImageDesktop,ImageMobile,SiteName,SiteLink}) {

  const data = await WebSitePortifolios()
  console.log(data);

  return (
    <div className="w-full flex flex-col md:flex-row gap-5" >
        {/* Desktop Version */}
        <div className="relative h-[300px] w-full sm:w-[50%] border-4 border-lightColor/50  rounded-md " >
            <img
            src={ImageDesktop}
            alt="Website Sample images"
            className="object-cover w-full h-full"
            />
            {/* Mobile display */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[150px] mr-2 mb-2 border-2 rounded-md bg-lightColor border-lightColor/50 " >
            <img
            src={ImageMobile}
            alt="Mobile Sample Images"
            className=" object-cover w-full h-full "
            />   
            </div>
        </div>
        {/* Text Section */}
        <div className=" flex flex-col justify-between ">
            <div className="font-bold underline hover:opacity-50 " ><a href={SiteLink}  target="_blank" >{SiteName}</a></div>
            <div className="font-light opacity-50" >
              {children}
            </div>
        </div>
    </div>
  )
}
