import { SocialData } from "@/app/Data/SocialMediaData/SocialMediaData"

export default function SocialMediaComp({className, width,height}:{className?:string,width:string,height:string}) {
    
  return (
    <div className={className}>
        {SocialData.map((x)=>(
            <div key={x.Name} className=" " >
                <a href={x.Link} target="_blank" >
                <div className={`w-[${width}] h-[${height}] opacity-50 hover:opacity-100`}>
                   {x.Icon}
                </div>
                </a>
            </div>
        ))}
    </div>
  )
}
