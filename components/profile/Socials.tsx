export default function Socials() {
  return (
    <div
      id="socials-wrapper"
      className="text-teal-950 flex flex-col p-4 bg-teal-500/20 col-start-1 row-start-2 border border-transparent rounded md:mt-[10vh] h-[30vh]"
    >
      <h2 className="text-center font-bold uppercase lg:text-2xl">
        SOCIAL LINKS
      </h2>
      <ul className="flex flex-col justify-center gap-4 p-4  w-full border border-transparent rounded">
        <ul className="flex items-center gap-2 ">
          <ul className="w-full p-2 border border-transparent rounded-lg bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">LinkedIn:</li>
            <li>[empty]</li>
          </ul>
          <li className="p-2 border border-transparent rounded-full bg-teal-700/40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-teal-900 hover:text-teal-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </li>
        </ul>

        <ul className="flex items-center gap-2 ">
          <ul className="w-full p-2 border border-transparent rounded-lg bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">Google Scholar:</li>
            <li>[empty]</li>
          </ul>
          <li className="p-2 border border-transparent rounded-full bg-teal-700/40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-teal-900 hover:text-teal-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </li>
        </ul>

         <ul className="flex items-center gap-2 ">
          <ul className="w-full p-2 border border-transparent rounded-lg bg-teal-700/40 flex flex-row gap-2">
            <li className="font-bold">Email:</li>
            <li>[empty]</li>
          </ul>
          <li className="p-2 border border-transparent rounded-full bg-teal-700/40 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-teal-900 hover:text-teal-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </li>
        </ul>
      </ul>
    </div>
  );
}
