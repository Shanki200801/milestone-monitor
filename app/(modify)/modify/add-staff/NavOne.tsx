"use client";

import Image from "next/image";
import logoImg from "../../../../public/logo.webp";
import { Urbanist } from "next/font/google";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const bodyText = Urbanist({
  weight: "400",
  subsets: ["latin"],
});

const headerText = Urbanist({
  weight: "600",
  subsets: ["latin"],
});

export default function NavTest() {
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
      className={`${bodyText.className} fixed top-[3.5%] right-0 sm:left-[10%] h-[10vh]`}
    >
      {/* Navigation Bar - 1: Small Screens Only*/}
      <ul className="sm:hidden grid grid-cols-3 grid-rows-2 items-center justify-center">
        <li
          id="home-logo-box"
          className={`text-3xl col-start-2 sm:col-start-1 row-start-1`}
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
          className="text-center row-start-1 col-start-1 pl-4"
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
          className="flex flex-row-reverse row-start-1 col-start-3 pr-4"
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
        <li
          id="small-home-greeting-user-header"
          className={`${headerText.className} uppercase row-start-2 text-center text-2xl w-[100vw] h-fit -mt-16`}
        >
          Add Staff
        </li>
      </ul>

      {/* Navigation Bar - 1: Large Screens Only*/}
      <ul
        id="lg-navbar-1-elements"
        className="invisible sm:visible grid grid-cols-3 grid-rows-2 items-center justify-center"
      >
        <h1
          id="home-greeting-user-header"
          className={`${headerText.className} uppercase text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center row-start-2 col-span-3 sm:col-span-1 sm:col-start-2 sm:row-start-1 -mt-20 lg:-mt-[1rem] sm:m-0`}
        >
          Add Staff
        </h1>
        <ul
          id="home-user-actions-elements"
          className={`lg:-mt-[1rem] row-start-1 col-start-3 justify-self-end flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 pr-4`}
        >
          <li id="home-user-settings-link" className="hidden sm:inline">
            <a href="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
                className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px]"
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
