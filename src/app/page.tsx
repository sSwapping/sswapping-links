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
    <div className='flex justify-center h-screen overflow-hidden'>
      <MatrixRaining />
      <div className='my-16 md:my-20'>
        <div className='h-full border rounded-md w-80 md:w-[40rem] card backdrop-blur-sm bg-opacity-10 border-neutral-800/70 shadow shadow-neutral-900'>
          <div className='flex items-center justify-center'>
            <div>
              <Image
                src={Avatar}
                alt='Avatar'
                className='w-16 h-16 mt-6 rounded-full md:mt-12 lg:w-20 lg:h-20'
              />
            </div>
          </div>
          <div className='mt-4 text-center text-base/relaxed lg:text-xl/relaxed text-neutral-200/90'>
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
          {/* [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] */}
          <div className='mt-6 mx-3 md:mx-10 md:h-[30rem] rounded-lg text-neutral-200 flex-grow-0 h-[22rem] overflow-auto scrollbar-thin scrollbar-thumb-[#0f0] dark:scrollbar-thumb-gray-400 scrollbar-track-transparent [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] py-4 '>
            <div className='flex items-center justify-center'>
              <ul className='flex flex-col gap-2 place-items-center lg:ml-2'>
                {LinksStore.map((link, i) => (
                  <li
                    key={i}
                    className='w-full h-full border rounded-lg card bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border-neutral-800/70 hover:bg-opacity-30 text-neutral-200/80 hover:text-neutral-200 hover:bg-green-700/10 dark:hover:bg-neutral-700/20'
                  >
                    <a
                      href={link.href}
                      className='flex items-center w-full gap-10 p-5 hover:text-green-200 dark:hover:text-neutral-100'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>
                        <IconContext.Provider
                          value={{ className: "h-6 w-6 md:h-8 md:w-8" }}
                        >
                          {link.icon}
                        </IconContext.Provider>
                      </span>
                      <p className='text-base/relaxed lg:text-lg/relaxed'>
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
