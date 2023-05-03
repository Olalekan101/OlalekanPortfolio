import Image from "next/image"

export default function HeroImgLandsacape() {
      
  return (
    <div className=" md:hidden scroll-px-8 opacity-70">
        <div className="relative flex gap-2 justify-center" >
                 <Image
                 src='/OlalekanImage/Olalekan.webp'
                 alt="Web tech stack"
                 className="w-[100%] h-[100%] object-contain"
                 width={500}
                 height={500}
                 />
            </div>
    </div>
  )

  // const data = await Contenfull()
      
  // return (
  //   <div className=" sm:hidden -mx-4 opacity-70">
  //       <div className="  overflow-clip  ">
  //       {data?.map(x=>(
  //           <div key={x.sys.id} className=" relative flex gap-2 justify-center " >
  //                <img
  //                src={"https:" + x.fields.heroImageLandscape.fields.file.url}
  //                alt="Web tech stack"
  //                className="w-[100%] h-[100%] object-contain"
  //                />
  //           </div>
  //       ))}
  //       </div>
  //   </div>
  // )
}
