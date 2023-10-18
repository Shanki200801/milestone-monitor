import Image from "next/image";
import profileImg from "../../public/pfp-placeholder.webp";

export default function Account() {
  return (
    <div
      id="profile-details"
      className="text-teal-950 bg-teal-500/20 flex flex-col justify-center p-4 col-start-1 row-start-1 border border-transparent rounded h-[45vh]"
    >
      <h2 className="text-center font-bold uppercase lg:text-2xl pt-10">
        Profile Details
      </h2>
      <div
        id="account-wrapper"
        className="flex flex-row items-center h-[40vh] lg:p-8 p-12 -mt-[2%]"
      >
        <div className="container lg:w-full lg:h-full bg-teal-600/30 overflow-hidden border border-transparent rounded-l p-4">
          <Image
            id="pfp-placeholder"
            src={profileImg}
            className="lg:w-full lg:h-full aspect-auto object-contain object-center overflow-hidden"
            alt="[user's profile picture]"
          />
        </div>

        <ul className="flex flex-col justify-center gap-8 pr-4 h-full w-[70vw] bg-teal-600/30 border border-transparent rounded-r">
          <ul className="p-2 border border-transparent rounded bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">Name:</li>
            <li>[user.name]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">Department:</li>
            <li>[user.dept]</li>
          </ul>
          <ul className="p-2 border border-transparent rounded bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">Faculty:</li>
            <li>[user.faculty]</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
