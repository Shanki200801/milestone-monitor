import { Montserrat, Urbanist } from "next/font/google";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const tableFont = Urbanist({ weight: "400", subsets: ["latin"] });

export default function AddNewSec(props: any) {
  return (
    <>
      <section
        id="add-new-section"
        className={`${tableFont.className} lg:h-[20rem] tracking-wide bg-[#cbfef8] m-3 p-5 sm:rounded flex flex-col items-center justify-center`}
      >
        <p className="text-2xl">Add a new {props.name}</p>
        <div className="flex w-28 h-28 justify-center content-center">
          <Popover modal={true}>
            <PopoverTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-28 h-28 cursor-pointer hover:w-[6.8rem] hover:h-[6.8rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-auto ">
              {props.children}
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </>
  );
}
