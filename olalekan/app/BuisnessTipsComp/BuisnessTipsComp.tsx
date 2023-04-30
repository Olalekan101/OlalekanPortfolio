import BuisnessTips from "../Data/BuisnessTips/BuisnessTips"

export default function BuisnessTipsComp() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center mt-6 md:mt-[100px] [&_div]:w-full [&_div]:animate-yMove [&_div]:translate-y-0 [&_div]:opacity-0 " >

        <div className=" col-span-2 md:col-span-1 w-full mb-2 md:mb-0 [--animationDelay:100ms] " >
            <h1 className=" text-sm md:text-base text-center font-extrabold opacity-70   " > How a website can help your business </h1>
        </div>

        <BuisnessTips className=" col-span-2 md:col-span-1 [--animationDelay:200ms]  " >
        Giving your business a website increases its perceived value to potential buyers.💸 .
        </BuisnessTips>

        <BuisnessTips className=" col-span-2 [--animationDelay:300ms] " >
        Social media is useful for businesses, but having a website for your business provides more freedom to express the value your product or service provides.
        </BuisnessTips>

        <BuisnessTips className=" col-span-2 [--animationDelay:400ms] " >
        Having social media accounts is good, but a website gives your business that professional touch.
        </BuisnessTips>

        <BuisnessTips className=" [--animationDelay:500ms] " >
            Putting your business online gives you access to many potential buyers.
        </BuisnessTips>
        
        <BuisnessTips className=" [--animationDelay:600ms] " >
            Putting your business online gives you access
        </BuisnessTips>

    </div>
  )
}
