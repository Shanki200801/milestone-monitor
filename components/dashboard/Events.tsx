export default function Events() {
  return (
    <ul
      className={`flex flex-row gap-12 justify-evenly py-6 0 rounded text-emerald-100 font-semibold`}
    >
      <li
        className={`shadow-lg shadow-emerald-600 bg-teal-800 hover:bg-teal-500 p-4 px-6 border border-transparent hover:border-cyan-800/50 rounded`}
      >
        <a href="/my-workshops">Workshops</a>
      </li>
      <li
        className={`shadow-lg shadow-emerald-600 bg-teal-800 hover:bg-teal-500 p-4 px-6 border border-transparent hover:border-cyan-800/50 rounded`}
      >
        <a href="/my-conferences">Conferences</a>
      </li>
      <li
        className={`shadow-lg shadow-emerald-600 bg-teal-800 hover:bg-teal-500 p-4 px-10 border border-transparent hover:border-cyan-800/50 rounded`}
      >
        <a href="/my-journals">Journals</a>
      </li>
      <li
        className={`shadow-lg shadow-emerald-600 bg-teal-800 hover:bg-teal-500 p-4 px-10 border border-transparent hover:border-cyan-800/50 rounded`}
      >
        <a href="/my-patents">Patents</a>
      </li>
    </ul>
  );
}
