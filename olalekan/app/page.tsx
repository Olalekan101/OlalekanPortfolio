
import HeroSection from "./HeroSection/page"
import Work from "./Work/page"
import About from "./About/page"
import Contact from "./Contact/page"
import BuisnessTipsComp from "./BuisnessTipsComp/BuisnessTipsComp"

export default function Home() {
  return (
      <main className=" flex flex-col">
        <HeroSection/>
        <BuisnessTipsComp/>
        <Work/>
        <About/>
        <Contact/>
      </main>
  )
}
