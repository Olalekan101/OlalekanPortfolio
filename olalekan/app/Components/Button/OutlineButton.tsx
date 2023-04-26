import Link from "next/link"
type fillButton={
    title:string
    link:string
}

export default function OutlineButton({title,link}:fillButton) {
  return (
    <>
    <a href={link} ><button className="p-2 text-xs sm:text-base border-lightColorDarker border-[1px] opacity-80 text-lightColor rounded-md hover:opacity-100 hoverbutton" >{title}</button></a>
    </>
  )
}
