"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const tableFont = Montserrat({ weight: "500", subsets: ["latin"] });
export default function CategoryHeader(props: any) {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      <header
        id="section-heading"
        className={`${tableFont.className} uppercase tracking-tight font-bold text-4xl m-8 p-3 text-center`}
      >
        {props.name}
      </header>
      <div id="icons">
        <a href="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] absolute top-9 right-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </a>

        <button onClick={handleSignOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] absolute top-9 right-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
