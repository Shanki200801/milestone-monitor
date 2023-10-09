export default function Carousel() {
  return (
    <div className="flex flex-row h-fit">
      <ul
        className={`text-teal-900 p-4 bg-teal-200 border border-cyan-700 rounded`}
      >
        <li
          className={`bg-teal-400 flex flex-col justify-center items-center px-12 py-20 border h-[30vh] border-cyan-800 rounded-t-lg`}
        >
          <p className="">Recent Event</p>
        </li>
        <ul className={`bg-teal-400 border border-cyan-700 p-4 rounded-b-lg`}>
          <li>Title</li>
          <li>Location</li>
          <li>Date</li>
        </ul>
      </ul>
      <ul
        className={`text-teal-900 p-4 bg-teal-200 border border-cyan-700 rounded`}
      >
        <li
          className={`bg-teal-400 flex flex-col justify-center items-center px-12 py-20 border h-[30vh] border-cyan-800 rounded-t-lg`}
        >
          <p className="">Recent Event</p>
        </li>
        <ul className={`bg-teal-400 border border-cyan-700 p-4 rounded-b-lg`}>
          <li>Title</li>
          <li>Location</li>
          <li>Date</li>
        </ul>
      </ul>
      <ul
        className={`text-teal-900 p-4 bg-teal-200 border border-cyan-700 rounded`}
      >
        <li
          className={`bg-teal-400 flex flex-col justify-center items-center px-12 py-20 border h-[30vh] border-cyan-800 rounded-t-lg`}
        >
          <p className="">Recent Event</p>
        </li>
        <ul className={`bg-teal-400 border border-cyan-700 p-4 rounded-b-lg`}>
          <li>Title</li>
          <li>Location</li>
          <li>Date</li>
        </ul>
      </ul>
      <ul
        className={`text-teal-900 p-4 bg-teal-200 border border-cyan-700 rounded`}
      >
        <li
          className={`bg-teal-400 flex flex-col justify-center items-center px-12 py-20 border h-[30vh] border-cyan-800 rounded-t-lg`}
        >
          <p className="">Recent Event</p>
        </li>
        <ul className={`bg-teal-400 border border-cyan-700 p-4 rounded-b-lg`}>
          <li>Title</li>
          <li>Location</li>
          <li>Date</li>
        </ul>
      </ul>
    </div>
  );
}
