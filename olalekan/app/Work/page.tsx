import WebAndPhoneMockup from "../Components/WebAndPhoneMockup/WebAndPhoneMockUp"
import { Contentful,Firebase,Nextjs,ReactIcon,Riveicon,Supabase } from "../Components/TechStack/TechStack"
import TechStackWrappar from "../Components/WebAndPhoneMockup/TechStackIcons"
import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"


const OlalekanTut = [<Firebase/>,<Nextjs/>,<Riveicon/>]

export default function Work() {

  return (
    <div id="Work" className="flex flex-col items-center gap-2 mt-10" >
        <h2 className="mb-5 text-sm sm:text-base" >Web Site Samples</h2>
        {/* @ts-expect-error Async Server Component */}
        <WebAndPhoneMockup  ImageDesktop={"SiteSampleImages/Olalekantutorial/Homepage.png"} ImageMobile={"SiteSampleImages/Olalekantutorial/Homepage.png"} SiteName={"Olalekan Tutorials"} SiteLink={"http://olalekan-tutorials.vercel.app/"} >
        <TechStackWrappar>
          {...OlalekanTut}
        </TechStackWrappar>
        </WebAndPhoneMockup>

    </div>
  )
}
