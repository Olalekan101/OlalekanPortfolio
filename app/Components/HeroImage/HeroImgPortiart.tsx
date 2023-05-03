import Image from "next/image"

export default function HeroImgPortiart() {
    
  return (
    <div className="relative hidden md:flex ">
          {/* Loading Text Placeholder */}

          {/* <div className="absolute flex h-full w-full -z-50" >
            <h2 className=" my-auto text-center font-black opacity-50 text-6xl" >Olalekan<br/>Esanola </h2>
          </div> */}

       {/* Image Section 1 */}
        <div>
          
       <div className=" animate-xMove [--animationDelay:100ms] opacity-0 translate-x-[-15px] "
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">
            <div className=" w-full h-full " >
                 <Image
                 src='/OlalekanImage/OlalekanPortiait.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full "
                 width={200}
                 height={300}
                 />
            </div>
        </div>
        <div className="w-[200px] h-[300px] bg-stone-950/30 inset-0 -translate-x-6 -translate-y-2 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div>
        </div>

        {/* Image Section 2 */}

       <div className="absolute inset-0 translate-x-1/3 -z-10 opacity-50">
       <div className="relative animate-xMove [--animationDelay:400ms] opacity-0 translate-x-[-15px] "
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">

            <div className=" relative w-full h-full " >
                 <Image
                 src='/HeroImages/codeBg1.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full  "
                 width={200}
                 height={300}
                 />
            </div>
        </div>
        {/* Shadow */}

        {/* <div className="w-[200px] h-[300px] bg-stone-950/30 -inset-x-7 inset-y-4 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div> */}
        </div>

        {/* Image Section 3 */}

        <div className="absolute inset-0 translate-x-1/3 -z-20 opacity-25">
       <div className="relative animate-xMove [--animationDelay:700ms] opacity-0 translate-x-[-15px] "
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">
            <div className=" relative w-full h-full " >
                 <Image
                 src='/HeroImages/codeBg2.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full  "
                 width={500}
                 height={500}
                 />
            </div>
        </div>
          {/* Shadow */}

        {/* <div className="w-[200px] h-[300px] bg-stone-950/30 -inset-x-7 inset-y-4 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div> */}
        </div>
       </div>
       </div>
        </div>
    </div>
  )
}
