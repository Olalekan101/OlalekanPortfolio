import Resume from "../Components/Button/ResumeButton"
export default function Navbar() {


  return (
    <>
    <nav className="sticky top-0 left-0 z-50 backdrop-blur-md" >
        <div className=" w-full flex justify-between align-middle items-center py-2 lg:py-3 md:py-3" >
            <h1 className="max-sm:hidden" >Olalekan</h1>
            <ul className="flex navtext justify-center w-full gap-4 opacity-80 sm:opacity-90 sm:gap-6 " >
                <li className="" ><a href="#Projects" >Projects</a></li>
                <li className="" ><a href="#About" >About</a></li>
                <li className="" ><a href="#Contact" >Contact</a></li>
            </ul>
            <div className="flex justify-end max-sm:hidden  " >
            {/* <FilledButton title="Resume" link="/OlalekanEsanolaCV.pdf" /> */}
            {/* <PdfViewer/> */}
            {Resume()}
            </div>
        </div>
    </nav>
  </>
  )
}

