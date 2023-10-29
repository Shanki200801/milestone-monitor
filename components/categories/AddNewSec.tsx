import { Montserrat, Urbanist } from "next/font/google";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const tableFont = Urbanist({ weight: "400", subsets: ["latin"] });

export default function AddNewSec(props: any) {
  return (
      <section
        id="add-new-section"
        className={`${tableFont.className} lg:h-[20rem] tracking-wide bg-[#cbfef8] m-3 p-5 sm:rounded flex flex-col items-center justify-center`}
      >
        <p className="text-2xl">Add a new {props.name}</p>
        <div className="flex w-28 h-28 justify-center content-center">
        {props.children}
        </div>
      </section>
  );
}
