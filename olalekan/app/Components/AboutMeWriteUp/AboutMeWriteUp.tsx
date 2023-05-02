"use client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useToggle } from "usehooks-ts"
import { AboutSection } from "../../Contenful/page"
import { useEffect, useState } from "react"
import {AiOutlineDown} from "react-icons/ai"
import { useScreen } from 'usehooks-ts'


export default function AboutMeWriteUp() {

    const [value, toggle, setValue] = useToggle()
    const [data , setData] = useState()
    const customToggle = () => setValue((x: boolean) => !x)
    const screen = useScreen()
    const mainSize = screen?.width
    
    useEffect(()=>{
        const Datas = async ()=>{
            const data = await AboutSection()
            setData(data)
        }
        Datas()
        .catch(console.error)
    },[])

  return (
            <div className="w-full relative">
                { data?.map((x)=>(
                    <div key={x.sys.id} className={` ${value ? "h-full" : "h-[300px]"} relative  overflow-clip md:h-full md:ml-[var(--aboutmarginleft)] mt-4 p-2 md:p-4 border-2 rounded-md border-slate-700 pb-20`}>
                    {documentToReactComponents(x.fields.aboutMe)}
                    { mainSize <= 768 ? <div className={`absolute inset-0 bg-gradient-to-t from-darkColor ${value ? 'opacity-25': "opacity-100" }`} >
                      <div className=" flex justify-center w-full h-full items-end " >
                      <button onClick={customToggle} className=" opacity-70 mb-2 " >{ value ? "Show Less" : "Show More" }
                      <AiOutlineDown className=" text-sm animate-bounce mx-auto" />
                      </button>
                      </div></div> : "" }
                      {/* <div className="absolute inset-0 w-full h-full -z-10" >
                        <div className=" flex justify-center translate-y-10" >
                        <div className=" w-[500px] h-[500px] rounded-full opacity-50 bg-emerald-500/20 " />
                        <div className=" w-[250px] h-[250px] rounded-full opacity-50 bg-emerald-500/20 " />
                        </div>
                      </div> */}
                  </div>
                )) }
              </div>
  )
}
