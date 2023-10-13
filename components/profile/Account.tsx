import Image from "next/image";
import profileImg from "../../public/pfp-placeholder.webp";

export default function Account() {
  return (
    <div
      id="account-wrapper"
      className="bg-teal-500/20 col-start-1 row-start-1 border border-transparent rounded flex flex-row items-center h-[50vh] lg:p-8 p-12"
    >
      <Image
        id="pfp-placeholder"
        src={profileImg}
        className="md:w-fit md:h-full border border-transparent rounded"
        alt="[user's profile picture]"
      />

      <ul className="flex flex-col justify-center gap-8 p-4 h-full w-full bg-teal-600/40 border border-transparent rounded">
        <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
          <li>Name:</li>
          <li>[user.name]</li>
        </ul>
        <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
          <li>Department:</li>
          <li>[user.dept]</li>
        </ul>
        <ul className="p-2 border border-transparent rounded bg-teal-600 flex flex-row gap-2">
          <li>Faculty:</li>
          <li>[user.Faculty]</li>
        </ul>
      </ul>
    </div>
  );
}
