"use client";
import Image from "next/image";
import logoImg from "../../public/logo.webp";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const bodyText = Montserrat({
  weight: "500",
  subsets: ["latin"],
});

export default function NavTwo() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <section
      id="navbar-2"
      className={`${bodyText.className} bg-teal-500 row-start-2 w-[10vw] h-full absolute invisible sm:visible top-0`}
    >
      {/* Navigation Bar - 2 */}
      <ul
        id="navbar-2-elements"
        className="text-teal-950 uppercase tracking-wider h-full lg:text-sm sm:text-[0.60rem] grid grid-cols-1 grid-rows-8 gap-4 justify-around items-center text-center"
      >
        <li>
          <a href="/">
            <Image
              id="logo-home"
              src={logoImg}
              alt="Logo Image"
              className="mx-auto -mt-[10%] -mb-6 lg:w-4/6 lg:h-4/6 md:3/5 md:3/5 w:2/5 h:2/5"
            />
          </a>
        </li>
        <li className="hover:text-emerald-300 ">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p className=" ">Dashboard</p>
          </a>
        </li>
        <li className="hover:text-emerald-300 ">
          <a href="/my-workshops">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            <p className=" ">Workshops</p>
          </a>
        </li>
        <li className="hover:text-emerald-300 ">
          <a href="/my-conferences">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <p className=" ">Conferences</p>
          </a>
        </li>
        <li className="hover:text-emerald-300 ">
          <a href="/my-journals">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p className=" ">Journals</p>
          </a>
        </li>
        <li className="hover:text-emerald-300 ">
          <a href="/my-patents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
            <p className=" ">Patents</p>
          </a>
        </li>

        {/* should only be accessible by hod  */}
        <li className="relative">
          <button
            onMouseOver={toggleSubMenu} //choose your demon lol; this one is a little seizurey
            // onClick={toggleSubMenu} //choose your demon lol; this one is a little annoying but more reliable ig
            className="hover:text-emerald-300 "
          >
            <a href="/modify"></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
            <p className="uppercase">Modify</p>
          </button>

          {subMenuOpen && (
            <ul className="z-10 absolute flex flex-col justify-between gap-8 bg-teal-500 left-[95%] p-4 -top-[80%] border border-transparent rounded-r">
              <li className="hover:text-emerald-300">
                <a href="/modify/staff/add-staff">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  <p>Add Staff</p>
                </a>
              </li>
              <li className="hover:text-emerald-300">
                <a href="/modify/approvals">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                  <p>Approvals</p>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* should only be accessible by hod & editor */}
        <li className="hover:text-emerald-300 ">
          <a href="/report-gen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <p className=" ">Reports</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
