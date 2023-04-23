import HeroSubject from "../Components/HeroSubject/page"
import Circle from "../Components/BackgroundShape/Circle"

export default function HeroSection() {
  return (
    <div>
        <div className="flex flex-col sm:flex-row">
        <HeroSubject/>
        <div className="w-full" ></div>
        </div>
        <div className=" fixed -inset-x-40 -inset-y-20 -z-30 bg-darkColorLight blur-2xl rounded-full h-[500px] w-[500px]" />
    </div>
  )
}
