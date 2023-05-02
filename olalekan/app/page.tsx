
import HeroSection from "./HeroSection/page"
import Contact from "./Contact/page"
import WebsiteHelp from "./WebsiteHelp/page"
import Projects from "./Projects/page"
import About from "./About/page"

export default function Home() {
  return (
      <main className=" flex flex-col">
        <HeroSection/>
        <WebsiteHelp/>
        <Projects/>
        {/* @ts-expect-error Async Server Component */}
        <About/>
        <Contact/>
      </main>
  )
}
