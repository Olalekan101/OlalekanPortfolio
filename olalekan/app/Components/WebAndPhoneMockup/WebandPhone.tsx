import Image from "next/image"

export default function WebandPhone() {
  return (
    <div className="w-full flex flex-col gap-5" >
        {/* Desktop Version */}
        <div className="h-[300px] w-full sm:w-[50%] border-4 border-lightColor/50 relative rounded-md " >
            <img
            src="./Homepage_1.png"
            alt="Homepage"
            className=" object-cover w-full h-full "
            />
            {/* Mobile display */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[150px] mr-2 mb-2 border-2 rounded-md bg-lightColor border-lightColor/50 " >
            <img
            src="./Homepage_1.png"
            alt="Homepage"
            className=" object-cover w-full h-full "
            />   
            </div>
            {/* Mobile display */}
        </div>

        <div className="h-[300px] w-full sm:w-[50%] overflow-clip border-4 border-lightColor/50 relative rounded-md" >
            <img
            src="./Homepage_1.png"
            alt="Homepage"
            className=" object-cover w-full h-full "
            />
        </div>
    </div>
  )
}
