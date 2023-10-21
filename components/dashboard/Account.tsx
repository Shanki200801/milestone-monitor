export default function Account() {
  return (
    <div className="h-fit bg-teal-100 border-8 border-teal-100 rounded">
        <li className={`flex flex-col justify-center items-center px-12 py-20 h-[40vh] bg-teal-300 border border-teal-900/30 rounded-t-lg`}>
          <p className="">Account Image</p>
        </li>
        <ul className={`h-[15vh] flex flex-col justify-center p-4 bg-teal-300 border border-teal-900/30 rounded-b-lg`}>
          <li>Name</li>
          <li>Designation</li>
          <li>Contact</li>
        </ul>
    </div>
  );
}
