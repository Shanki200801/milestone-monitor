import Image from "next/image";
import profileImg from "../../public/pfp-placeholder.webp";
import { Urbanist } from "next/font/google";

const headerText = Urbanist({
  weight: "500",
  subsets: ["latin"],
});

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

export default function Account() {
  return (
    <div
      id="profile-details"
      className="text-teal-950 bg-teal-500/20 flex flex-col justify-center p-4 -mt-[1%] col-start-1 row-start-1 border border-transparent rounded h-[45vh]"
    >
      <h2
        className={`${headerText.className} tracking-wide text-center font-bold uppercase lg:text-2xl pt-10`}
      >
        Profile Details
      </h2>
      <div
        id="account-wrapper"
        className="flex flex-row items-center h-[40vh] lg:p-8 p-12 -mt-[2%]"
      >
        <div className="container lg:w-full lg:h-full bg-teal-700/20 overflow-hidden border border-transparent rounded-l p-4">
          <Image
            id="pfp-placeholder"
            src={profileImg}
            className="lg:w-full lg:h-full aspect-auto object-contain object-center overflow-hidden shadow-md shadow-teal-700/20 border border-teal-700/20 rounded-md"
            alt="[user's profile picture]"
          />
        </div>

        <ul className="flex flex-col justify-center gap-8 pr-4 h-full w-[70vw] bg-teal-700/20 border border-transparent rounded-r">
          <ul
            className={`${bodyText.className} tracking-wide p-2 bg-teal-700/40 flex flex-row gap-2 shadow-md shadow-teal-700/20 border border-teal-700/10 rounded`}
          >
            <li className="text-teal-950 font-bold">Name:</li>
            <li className="font-bold text-teal-800/80">[user.name]</li>
          </ul>
          <ul className="p-2 shadow-md shadow-teal-700/20 border border-teal-700/10 rounded bg-teal-700/40 flex flex-row gap-2">
            <li className="text-teal-950 font-bold">Department:</li>
            <li className="font-bold text-teal-800/80">[user.dept]</li>
          </ul>
          <ul className="p-2 shadow-md shadow-teal-700/20 border border-teal-700/10 bg-teal-700/40 flex flex-row gap-2">
            <li className="text-teal-950 font-bold">Faculty:</li>
            <li className="font-bold text-teal-800/80">[user.faculty]</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
