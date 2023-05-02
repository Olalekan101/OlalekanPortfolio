
import { AboutSection } from "../Contenful/page"
import AboutMeWriteUp from "../Components/AboutMeWriteUp/AboutMeWriteUp"

export default async function About() {

  const data = await AboutSection() 

  // console.log(data);
     

  return (
    <div id="About" className="w-full md:mt-20 flex flex-col items-center justify-start" >
      <hr className="w-full h-[1px] opacity-50 my-10" />
        <div className=" w-full flex justify-start opacity-50 text-xl sm:text-3xl text-center md:text-left whitespace-nowrap  " ><p>About Me</p></div>
       {/* Horzontal line */}
        
        {
          data.map(x=>(
            <div key={x.sys.id} className="flex flex-col w-full mt-6 md:mt-10" >
             <div className=" flex gap-2 md:gap-4 justify-start items-center w-full " >

              {/* image */}

             <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full overflow-clip" >
             <img
             src={"https:" + x.fields.olalekanPicture?.fields.file.url}
             alt="Website Sample images"
             className="object-cover w-full h-full"
             />
              </div>
              {/* Name */}
              <div>
              <div className="opacity-70 text-sm md:text-base" >{x.fields.name}</div>
              <hr className=" my-2 h-[1px] w-full opacity-50" />
              <div className="opacity-70 text-[10px] md:text-sm font-light italic" ><p>5+ years of motion design and 2+ years of web dev</p></div>

              </div>

             </div>

              {/* About me writeup */}
              <AboutMeWriteUp/>
               {/* Technologies i use currently */}
              <div className=" mt-4 md:ml-[var(--aboutmarginleft)]" >
                <div className=" opacity-70 md:text-base text-sm font-light " ><p>Technologies I use</p>
                </div>
                <hr className=" w-auto h-[1px] opacity-50 my-4 " />
                <div className=" w-[25px] h-[25px] md:w-[30px] md:h-[30px] relative flex md:gap-5 gap-3 " >
                {x.fields.technologies?.map(y=>(
                 <img
                 src={"https:" + y.fields.file.url}
                 alt="Web tech stack"
                 className="object-contain w-full h-full border-r pr-2 border-slate-300/50  "
                 width={25}
                 height={25}
                 />
               ))}
                </div>
              </div>

            </div>
          ))
        }
    </div>
  )
}
