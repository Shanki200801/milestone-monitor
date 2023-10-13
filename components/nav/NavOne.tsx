"use client";

import Image from "next/image";
import logoImg from "../../public/logo.webp";
import { Poppins } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const bodyText = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function NavOne() {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };
  return (
    <section
      id="navbar-1"
      className={`${bodyText.className} fixed top-0 left-0 right-0 h-[10vh] row-start-1 col-span-3`}
    >
      {/* Navigation Bar - 1 */}
      <ul
        id="navbar-1-elements"
        className="grid grid-cols-3 grid-rows-2 items-center justify-center"
      >
        <li
          id="home-logo-box"
          className={`visible sm:invisible text-3xl col-start-2 sm:col-start-1 row-start-1`}
        >
          <a href="/">
            <Image
              id="logo-home"
              src={logoImg}
              alt="Logo Image"
              className="sm:m-0 my-0 mx-auto w-4/5 h-4/5 sm:w-3/6 md:w-2/6 lg:w-1/5 sm:h-3/6 md:h-2/6 lg:h-1/5"
            />
          </a>
        </li>
        <li
          id="home-small-navbar-btn"
          className="sm:hidden text-center row-start-1 col-start-1 pl-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[3rem] h-[3rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </li>
        <li
          id="home-log-out"
          className="sm:hidden flex flex-row-reverse row-start-1 col-start-3 pr-4"
        >
          <button onClick={handleSignOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </button>
        </li>
        {/* <ul id="home-small-navbar-elements" 
                    className="sm:hidden flex flex-col gap-8 absolute top-0 text-center items-center justify-center bg-black text-white w-screen h-screen">
              <li><CloseRoundedIcon
              className="w-[2rem] h-[2rem]"
              /></li>
              <li>Home</li>
              <li>Workshops</li>
              <li>Conferences</li>
              <li>Journals</li>
              <li>Patents</li>  
            </ul> */}
        <h1
          id="home-greeting-user-header"
          className={`${bodyText.className} text-lg sm:text-xl lg:text-2xl xl:text-3xl text-emerald-900 font-semibold text-center row-start-2 col-span-3 sm:col-span-1 sm:col-start-2 sm:row-start-1 -mt-20 sm:m-0`}
        >
          Welcome back! [user.name]
        </h1>
        <ul
          id="home-user-actions-elements"
          className={`row-start-1 col-start-3 justify-self-end flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 pr-4`}
        >
          <li id="home-user-profile-link" className="hidden sm:inline">
            <a href="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
          </li>
          <li id="home-log-out" className="hidden sm:inline">
            <button onClick={handleSignOut} className="sm:pt-[0.2rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </li>
        </ul>
      </ul>
    </section>
  );
}
