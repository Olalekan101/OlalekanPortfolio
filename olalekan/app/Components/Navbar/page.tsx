import FilledButton from "../Button/FilledButton"

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-between align-middle items-center py-2 lg:py-5 md:py-3" >
            <h1 className="max-sm:hidden" >Olalekan</h1>
            <ul className="flex navtext justify-center w-full gap-4 sm:gap-6 " >
                <li className="" ><a href="/" >Work</a></li>
                <li className="" ><a href="/" >About</a></li>
                <li className="" ><a href="/" >Contact</a></li>
            </ul>
            <div className="flex max-sm:hidden" >
            <FilledButton title="Resume" link="/" />
            </div>
        </div>
    </nav>
  )
}
