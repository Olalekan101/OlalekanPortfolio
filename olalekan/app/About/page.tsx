
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
              <div>
                
              </div>

            </div>
          ))
        }
    </div>
  )
}
