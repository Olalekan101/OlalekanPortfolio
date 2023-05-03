import HeroSubject from "../Components/HeroSubject/page"
import HeroImgPortiart from "../Components/HeroImage/HeroImgPortiart"
import HeroImgLandsacape from "../Components/HeroImage/HeroImgLandscape"
import SocialMediaComp from "../Components/SocialMediaComp/SocialMediaComp"

export default function HeroSection() {
  return (
    <>
    <div className="">
        <div className="flex flex-col md:flex-row relative">
           {/* @ts-expect-error Async Server Component */}
        <HeroSubject/>
        <div className=" relative w-full flex flex-col sm:flex-row mt-9 sm:mt-0 justify-center " >
          
          <HeroImgPortiart/>

          <div className=" md:hidden flex justify-center h-[150px] overflow-y-clip -mx-4 " >
          <HeroImgLandsacape/>
          </div>

          {/* Social Media Links Mobile */}
          <div className=" absolute right-0 " >
          <SocialMediaComp className=" flex flex-col gap-2 md:hidden " height="20px" width="20px" />
          </div>
        </div>

        </div>
       
    </div>
        {/* Social Media Links Desktop */}
        <div className="lg:fixed bottom-0 left-0 hidden lg:block " >
        <div className="  md:w-[32px] lg:w-[128px] " >
        <div className=" flex flex-col justify-center items-center gap-4 " >
          <SocialMediaComp  className="flex flex-col gap-4" height="20px" width="20 px" />            
          <hr className="rotate-180 h-[70px] w-[2px] bg-lightColor/40" />
          </div>
        </div>
        </div>

        {/* background shapes */}
        <div className="absolute top-0 -z-10 inset-x-0" >
        <div className=" -translate-x-[200px] -translate-y-[50px] hidden sm:block bg-darkColorLight blur-2xl rounded-full h-[500px] w-[500px]" />
        </div>
        {/* background shapes 2 */}
        <div className="absolute top-0 right-0 -z-50 opacity-50 " >
        <div className=" translate-x-[200px] -translate-y-[250px] hidden sm:block bg-darkColorLight blur-2xl rounded-full h-[500px] w-[500px]" />
        </div>



         {/* background shapes mobile */}
        <div className="absolute top-0 inset-x-0 -z-10" >
        <div className=" -translate-y-[150px] mx-auto md:hidden bg-darkColorLight blur-2xl rounded-full h-[300px] w-[300px]" />
        </div>
    </>
  )
}
