import { LinksType } from "@/types/linksType";
import {
  FaGithub,
  FaInstagram,
  FaSteam,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

export const LinksStore: LinksType[] = [
  {
    title: "Twitch",
    href: "https://www.twitch.tv/sswapping",
    icon: <FaTwitch className='w-5 h-5 md:h-8 md:w-8' />,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@sswapping",
    icon: <FaTiktok className='w-5 h-5 md:h-8 md:w-8' />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/jeff.045/",
    icon: <FaInstagram className='w-5 h-5 md:h-8 md:w-8' />,
  },
  {
    title: "My Portfolio",
    href: "https://www.sswapping.dev",
    icon: "",
  },
  {
    title: "GitHub",
    href: "https://www.instagram.com/jeff.045",
    icon: <FaGithub className='w-5 h-5 md:h-8 md:w-8' />,
  },
  {
    title: "Steam",
    href: "https://steamcommunity.com/id/sSwaqqing",
    icon: <FaSteam className='w-5 h-5 md:h-8 md:w-8' />,
  },
];
