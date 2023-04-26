"use client"

import { motion } from "framer-motion"

export default function HeroImgPortiart() {
    
  return (
    <div className="relative hidden sm:flex ">
        <div>

          {/* Image Section 1 */}
          
       <motion.div className="relative"
       initial={{
        opacity:0,
        x:-10
       }}
       animate={{
        opacity:1,
        x:0,
        transition:{
          duration:0.5,
          ease:"easeOut"
        }
       }}
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">
            <div className=" w-full h-full " >
                 <img
                 src='./OlalekanPortiait.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full "
                 />
            </div>
        </div>
        <div className="w-[200px] h-[300px] bg-stone-950/30 inset-0 -translate-x-6 -translate-y-2 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div>
        </motion.div>

        {/* Image Section 2 */}

       <div className="absolute inset-0 translate-x-1/3 -z-10 opacity-50">
       <motion.div className="relative"
        initial={{
          opacity:0,
          x:-10
         }}
         animate={{
          opacity:1,
          x:0,
          transition:{
            duration:0.5,
            ease:"easeOut",
            delay:0.2
          }
         }}
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">

            <div className=" relative w-full h-full " >
                 <img
                 src='./codeBg1.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full  "
                 />
            </div>
        </div>
        {/* Shadow */}

        {/* <div className="w-[200px] h-[300px] bg-stone-950/30 -inset-x-7 inset-y-4 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div> */}
        </motion.div>

        {/* Image Section 3 */}

        <div className="absolute inset-0 translate-x-1/3 -z-20 opacity-25">
       <motion.div className="relative"
         initial={{
          opacity:0,
          x:-10
         }}
         animate={{
          opacity:1,
          x:0,
          transition:{
            duration:0.5,
            ease:"easeOut",
            delay:0.4
          }
         }}
       >
       <div className=" w-[200px] h-[300px] bg-lightColor rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip border-4 border-lightColor ">
            <div className=" relative w-full h-full " >
                 <img
                 src='codeBg2.jpg'
                 alt="Web tech stack"
                 className="object-cover w-full h-full  "
                 />
            </div>
        </div>
          {/* Shadow */}

        {/* <div className="w-[200px] h-[300px] bg-stone-950/30 -inset-x-7 inset-y-4 absolute -z-40 rounded-tl-[107px] rounded-tr-[29px] rounded-bl-[175px] rounded-br-[175px] mt-9 overflow-clip  ">
        </div> */}
        </motion.div>
       </div>
       </div>
        </div>
    </div>
  )
}
