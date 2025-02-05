"use client";
import Avatar from "@/assets/images/avatar.png";
import { LinksStore } from "@/stores/linksStore";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { IconContext } from "react-icons";
import dynamic from "next/dynamic";

const MatrixRaining = dynamic(() => import("@/components/MatrixRaining"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen overflow-hidden'>
      <MatrixRaining />
      <div className='w-auto'>
        <div className='border rounded-md w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[640px] 2xl:w-[720px] card backdrop-blur-sm bg-opacity-10 border-neutral-800/70 shadow shadow-neutral-900'>
          <div className='flex flex-col items-center justify-center py-6 sm:py-8 md:py-10'>
            <div>
              <Image
                src={Avatar}
                alt='Avatar'
                width={128}
                height={128}
                className='w-20 h-20 rounded-full sm:w-24 sm:h-24 md:w-28 md:h-28'
              />
            </div>
            <div className='mt-4 text-base font-bold text-center sm:text-lg md:text-xl xl:text-2xl text-neutral-200'>
              <Typewriter
                words={["@sSwapping"]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </div>
            <div className='w-full mt-6 md:mt-8 max-h-[60vh] rounded-lg text-neutral-200 overflow-y-auto scrollbar-thin scrollbar-thumb-[#0f0] dark:scrollbar-thumb-gray-400 scrollbar-track-transparent [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] py-4'>
              <ul className='flex flex-col items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-10'>
                {LinksStore.map((link, i) => (
                  <li
                    key={i}
                    className='w-11/12 transition-all duration-300 border rounded-lg sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 card bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border-neutral-800/70 hover:bg-opacity-30 text-neutral-200/80 hover:text-neutral-200 hover:bg-green-700/10 dark:hover:bg-neutral-700/20'
                  >
                    <a
                      href={link.href}
                      className='flex items-center w-full gap-3 p-3 sm:p-3.5 md:p-4 xl:p-6 hover:text-green-200 dark:hover:text-neutral-100'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-10 xl:h-10'>
                        <IconContext.Provider
                          value={{
                            className: "w-full h-full",
                          }}
                        >
                          {link.icon}
                        </IconContext.Provider>
                      </span>
                      <p className='text-base sm:text-lg md:text-xl xl:text-2xl'>
                        {link.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
