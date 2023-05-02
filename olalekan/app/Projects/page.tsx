import WebAndPhoneMockup from "../Components/WebAndPhoneMockup/WebAndPhoneMockUp"

export default function Projects() {

  return (
        <div className="md:mt-10 mt-5" >
    <div  className="flex flex-col gap-2 mt-5 " >
      <div className="flex items-center gap-2 opacity-50 mb-5 md:mb-10 ">
        <div><h2 className=" text-xl sm:text-3xl text-center md:text-left whitespace-nowrap  " >Some Things I’ve Built</h2></div>
        <div className="w-full h-full align-middle " ><hr className="w-full md:w-1/3 h-1 " /></div>
      </div>
        {/* @ts-expect-error Async Server Component */}
        <WebAndPhoneMockup/>
        </div>
    </div>
  )
}
