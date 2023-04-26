
import HeroSection from "./HeroSection/page"
import Quotes from "./Quotes/page"
import Work from "./Work/page"
import About from "./About/page"
import Contact from "./Contact/page"

export default function Home() {
  return (
      <main className=" flex flex-col">
        <HeroSection/>
        <Quotes/>
        <Work/>
        <About/>
        <Contact/>
      </main>
  )
}
