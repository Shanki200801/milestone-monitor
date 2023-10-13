export default function Account() {
  return (
    <div className="bg-teal-400 h-[40vh]">
      <ul
        className={`text-teal-900 p-4 bg-teal-200 border border-cyan-700 rounded`}
      >
        <li className={`bg-teal-400 flex flex-col justify-center items-center px-12 py-20 border h-[30vh] border-cyan-800 rounded-t-lg`}>
          <p className="">Account Image</p>
        </li>
        <ul className={`bg-teal-400 border border-cyan-700 p-4 rounded-b-lg`}>
          <li>Name</li>
          <li>Designation</li>
          <li>Contact</li>
        </ul>
      </ul>
    </div>
  );
}
