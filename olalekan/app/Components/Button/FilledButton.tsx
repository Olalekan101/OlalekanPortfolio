type fillButton={
    title:string
    link:string
}

export default function FilledButton({title,link}:fillButton) {
  return (
    <>
    <a href={link} ><button className="p-2 text-xs sm:text-base bg-lightColorDarker text-darkColor rounded-md hoverbutton" >{title}</button></a>
    </>
  )
}
