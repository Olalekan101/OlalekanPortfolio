import {AiOutlineWhatsApp} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdAlternateEmail} from "react-icons/md"

export default function Contact() {
    return (
      <div id="Contact" className="w-full h-[300px] flex flex-col gap-10 items-center justify-center  " >
          <div className="font-thin text-xl " ><p>I'm available 24/7.</p></div>
          {/* <hr className=" w-full h-[1px] opacity-50 " /> */}
          <div className=" flex gap-4 text-3xl" >
            <a className="hover:text-green-500 transition-colors delay-200 duration-150 ease-out" href="https://wa.me/7010174548" target="_blank" ><AiOutlineWhatsApp/></a>
            <a className="hover:text-green-500 transition-colors delay-200 duration-150 ease-out" href="tel:07010174548" target="_blank"><BsFillTelephoneFill/></a>
            <a className="hover:text-green-500 transition-colors delay-200 duration-150 ease-out" href="mailto: esanolasunny@gmail.com" target="_blank"><MdAlternateEmail/></a>
          </div>
      </div>
    )
  }