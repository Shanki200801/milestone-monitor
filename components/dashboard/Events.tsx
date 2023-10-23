import { Montserrat, Urbanist } from "next/font/google";

const headerText = Urbanist({
  weight: "500",
  subsets: ["latin"],
});

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

export default function Events() {
  return (
    <div className="h-fit bg-teal-500/20 lg:p-8 lg:mt-10 col-span-2 row-start-2 border border-transparent rounded">
      <h2 className={`${headerText.className} tracking-wide text-center font-bold uppercase lg:text-2xl text-teal-950 pb-6`}>
        Your Feed
      </h2>

      <ul className={`${bodyText.className} text-teal-950 bg-teal-700/20 lg:px-16 lg:py-12 flex flex-row justify-between items-center gap-8 border border-transparent rounded uppercase tracking-wider`}>
        <a href="/my-workshops">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Workshops
          </li>
        </a>
        <a href="/my-conferences">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Conferences
          </li>
        </a>
        <a href="/my-journals">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Journals
          </li>
        </a>
        <a href="/my-patents">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Patents
          </li>
        </a>
        <a href="/modify">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Modify
          </li>
        </a>
        <a href="/report-gen">
          <li
            className={`bg-teal-300 w-[9vw] py-4 text-center shadow-lg shadow-teal-600/60 border-[2.5px] border-transparent hover:border-cyan-800 rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-md`}
          >
            Reports
          </li>
        </a>
      </ul>
    </div>
  );
}
