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
      <div className='my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-32'>
        <div className='h-full border rounded-md w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] max-w-7xl card backdrop-blur-sm bg-opacity-10 border-neutral-800/70 shadow shadow-neutral-900'>
          <div className='flex items-center justify-center'>
            <div>
              <Image
                src={Avatar}
                alt='Avatar'
                width={128}
                height={128}
                className='w-16 h-16 mt-6 rounded-full sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32 md:mt-12'
              />
            </div>
          </div>
          <div className='mt-4 text-base font-bold text-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-neutral-200'>
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
          <div className='mx-3 mt-6 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 h-[60vh] rounded-lg text-neutral-200 overflow-auto scrollbar-thin scrollbar-thumb-[#0f0] dark:scrollbar-thumb-gray-400 scrollbar-track-transparent [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] py-4'>
            <div className='flex items-center justify-center'>
              <ul className='flex flex-col w-full max-w-3xl gap-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 2xl:py-6'>
                {LinksStore.map((link, i) => (
                  <li
                    key={i}
                    className='w-full mx-auto transition-all duration-300 border rounded-lg sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-1/2 card bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border-neutral-800/70 hover:bg-opacity-30 text-neutral-200/80 hover:text-neutral-200 hover:bg-green-700/10 dark:hover:bg-neutral-700/20'
                  >
                    <a
                      href={link.href}
                      className='flex items-center w-full gap-4 p-3 sm:gap-6 md:gap-8 lg:gap-10 sm:p-4 md:p-5 hover:text-green-200 dark:hover:text-neutral-100'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>
                        <IconContext.Provider
                          value={{
                            className:
                              "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8",
                          }}
                        >
                          {link.icon}
                        </IconContext.Provider>
                      </span>
                      <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
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
