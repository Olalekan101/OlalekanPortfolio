import Contenfull from "@/app/Contenful/page"
import FilledButton from "../Button/FilledButton";

export default async function HerobuttonNwork() {
     const data = await Contenfull();
     
  return (
    <div>
        {
            data.map(x=>(
                <div key={x.sys.id} className="flex flex-col gap-2 sm:flex-row mt-2 sm:mt-5 items-center  " >
                    <FilledButton title="See More" link="/" />
                    <p className="text-lightColor text-[10px] sm:text-base opacity-50 " >{x.fields.projects}</p>
                </div>
            ))
        }
    </div>
  )
}
